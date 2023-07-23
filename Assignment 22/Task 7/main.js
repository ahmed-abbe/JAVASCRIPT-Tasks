let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));

console.log([...numsOne, ...numsTwo]);

console.log(Array.from(numsOne.join("") + numsTwo.join("")).map((ele) => +ele));
// Needed Output
// [1, 2, 3, 4, 5, 6];
