const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
}
editInPlace();

//const array can be mutated as above 

//FINAL IN JS.
Object.freeze(s);

s[1] = 3; // does not have any affect. 
console.log(s);

const fib = (a, b) => a+2*b;

console.log(fib(2, 3));


