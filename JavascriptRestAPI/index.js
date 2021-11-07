let expressApp = require('express');
let application = expressApp();
let pieRepo = require('./repos/piesRepo');
let router = expressApp.Router();

application.use('/api/', router);

router.get('/', function (req, res, next) {

    pieRepo.get(function (data) {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved",
            "data": data
        });
    },
        function (err) {
            next(err);
        });
});

router.get('/search', function (req, res, next) {
    let id = req.query.id;
    let name = req.query.name;

    let searchObject = {"id":id,"name":name};
    pieRepo.search(searchObject,function(data){
        
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "All pies retrieved",
                "data": data
            });
        }
    },
    
    function(err){
        next(err)
    });
});

router.get('/:id', function (req, res, next) {

    pieRepo.getById(req.params.id, function (data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "All pies retrieved",
                "data": data
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie with id:" + req.params.id + " could not be found",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie with id:" + req.params.id + " could not be found",
                }
            });
        }
    }, function (err) {
        next(err);
    });

});

var server = application.listen(5000, function () {
    console.log("Listening on port 5000");
});