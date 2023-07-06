// I created Objects in Other Ways in task Starting From line 12 (Comments)

// Method One
// Create Your Object Here
let objMethodOne = {
    property: "First Object",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object();
objMethodTwo.property = "Second Object";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
objMethodThree = Object.create(objMethodTwo);
objMethodThree.property = "Third Object";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({ property: "Fourth Object" });
console.log(objMethodFour.property); // "Method Four"
