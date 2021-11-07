let fs = require('fs')

fs.readFile("./pies.json",function(err,data){
    if(err){
        console.log("Cannot read file");
    }
    else{
        let d = JSON.parse(data).find(p => p.id==3);
        console.log(d);
    }
})