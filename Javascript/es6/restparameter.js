const sum = (...args) => {
    return args.reduce((a,b)=>a+b);
}

console.log(sum(1,2,3,4));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

var list = [1,2,3,4,5];
//using rest parameters as slice. 
const [a,b,...arr] = list;
//arr contains [3,4,5];
console.log(arr);
console.log(list.slice(2,5));

