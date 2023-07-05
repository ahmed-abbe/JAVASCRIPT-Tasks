let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray
    .reduce((a, b) => a + b)
    .split(",")
    .join("");

console.log(result);
// Elzero
