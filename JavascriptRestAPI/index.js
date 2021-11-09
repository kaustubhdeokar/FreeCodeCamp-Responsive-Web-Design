let expressApp = require('express');
let application = expressApp();
let pieRepo = require('./repos/piesRepo');
let cors = require('cors');
let router = expressApp.Router();
application.use(expressApp.json());
application.use(cors());
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

    let searchObject = { "id": id, "name": name };
    pieRepo.search(searchObject, function (data) {

        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "All pies retrieved",
                "data": data
            });
        }
    },

        function (err) {
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

router.post('/', function (req, res, next) {
    pieRepo.insert(req.body, function (data) {
        res.status(201).json({
            "status": 201,
            "statusText": "Created",
            "message": "New pie added",
            "data": data
        });
    }, function (err) {
        next(err);
    });
});

router.put('/:id', function (req, res, next) {
    pieRepo.getById(req.params.id, function (data) {

        if (data) {
            pieRepo.update(req.params.id, req.body, function (data) {
                res.status(205).json({
                    "status": 201,
                    "statusText": "Created",
                    "message": "New pie added",
                    "data": data
                });
            }, function (err) {
                next(err);
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie with id:" + req.params.id + " could not be found",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie with id:" + req.params.id + " could not be found"
                }
            });
        }
    }, function (err) {
        next(err);
    });

});

router.patch('/:id', function (req, res, next) {
    pieRepo.getById(req.params.id, function (data) {
        if (data) {
            pieRepo.update(req.params.id, req.body, function (data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "updated",
                    "data": data
                });
            }, function (err) {
                next(err);
            });
        }
        else {
            res.status(400).json({
                "status": 400,
                "statusText": "update failed",
                "message": "update failed"
            });
        }
    }, function (err) {
        next(err);
    });
});

router.delete('/:id', function (req, res, next) {
    pieRepo.getById(req.params.id, function (data) {
        if (data) {
            pieRepo.delete(req.params.id, function (data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "Delete successful.",
                    "message": "Delete for id " + req.params.id + " successful.",
                    "data": data
                });
            }, function (err) {
                console.log("delete fail");
                next(err);
            });
        }
    });
})

application.use('/api/', router);


var server = application.listen(5000, function () {
    console.log("Listening on port 5000");
});