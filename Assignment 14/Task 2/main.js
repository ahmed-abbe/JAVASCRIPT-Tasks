let myString = "EElllzzzzzzzeroo";

let result = myString
    .split("")
    .filter(function (a, i, arr) {
        return a !== arr[i + 1];
    })
    .reduce((a, b) => `${a}${b}`);

console.log(result);
// Elzero
