var arr = [1, 2, 3];
let arrsum = arr.filter(a => a > 2).reduce((a, b) => a + b);
console.log(arrsum);

