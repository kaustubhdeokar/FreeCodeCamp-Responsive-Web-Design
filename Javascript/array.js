let arr = [1, 2, 3]

arr.push(4);

arr = arr.filter(a => a != 4);


arr.forEach(i => console.log(i))

let newarr = [];
newarr.push([...arr]);
newarr.push([...arr]);
console.log(newarr);

arr.push(4);
arr.unshift(0);

console.log(arr);

let poppedElement = arr.pop();
let shiftedElement = arr.shift();

console.log(arr);

//splice documentation.
//arr.splice(startIndex, amountToDelete, (13, 14)elements to add -comma separated);

arr.splice(1, 1, 12, 13, 14);

console.log(arr);

//slice -> used to create a copy. 
//arr.slice(start,end)****(not start and positions to manipulate, *different from splice)
let arr2 = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
let arr3 = arr2.slice(2, 4);
console.log(arr3);

function quickCheck(arr, elem) {
    let t = arr.indexOf(elem);
    return t >= 0;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


let nestedArray = [
    ['deep'],
    [ ['deeper'], ['deeper'] ],
    [ [ ['deepest'], ['deepest'] ], [ [ ['deepest-est?'] ] ]]
  ];

  console.log(nestedArray[2][1][0][0][0]);

  let myNestedArray = [
    // Only change code below this line
    
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat',
    [[['deepest-est?']]],
    [['deepest']],
    ['deep'],
    false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];  
  console.log(myNestedArray[2][1][0][0][0]);
  console.log(myNestedArray[2][2][0][0]);
  console.log(myNestedArray[2][3][0]);