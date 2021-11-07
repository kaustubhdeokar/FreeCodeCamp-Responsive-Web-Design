function fibonaaci(num) {
    let a = 0
    let b = 1
    let c = 1
    for(i=0;i<num;i++){
        a = b;
        b = c;
        c = a+b;
        console.log(c)
    }
}

fibonaaci(10)

