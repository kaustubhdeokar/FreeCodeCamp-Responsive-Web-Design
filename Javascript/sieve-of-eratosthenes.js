
//for prime numbers between 1-50.
console.log("Prime numbers")
let arr = []
let i = 2
while (i < 50) {
    arr.push(true)
    i++
}

for (let i = 2; i < Math.sqrt(arr.length); i++) {
    for (j = i * i; j < arr.length; j+=i) {
        arr[j] = false
    }
}

arr.forEach(myFunction)

function myFunction(index,element){
    if(arr[element]===true){
        console.log(element)
    }
}