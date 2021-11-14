//2
function reverseString(str) {
    return console.log(str.split("").reverse().join(""));
}

console.log(reverseString("hello"));

//4
function findLongestWordLength(str) {
    let wordLength = 0;
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > wordLength) {
            wordLength = str[i].length;
        }
    }
    return wordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));