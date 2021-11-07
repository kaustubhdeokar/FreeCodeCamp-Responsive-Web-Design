let fs = require('fs')

fs.readFile("./pies.json", function (err, data) {
    if (err) {
        console.log("Cannot read file");
    }
    else {
        let pies = JSON.parse(data);
        let pie = pies.find(p => p.id == 1);
        pies = pies.filter(p => p!=pie);
        fs.writeFile("./pies.json",JSON.stringify(pies),function(err){
            if(err){
                console.log("couldn't write");
            }
        })
    }
})