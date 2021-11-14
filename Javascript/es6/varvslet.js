for (var i = 0; i < 5; i++) {
    dosomething = function () {
        console.log("do nothing");
        return i;
    }
}

console.log(dosomething());
//var defines it globally. you can redefine variables with var- overwrite them. 
//let - locally.

for(let i=0;i<5;i++){
    letSomething = function(){
        console.log("let - set i");
        return i;
    }
}

console.log(letSomething());


