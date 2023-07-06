// Create Your Object Here
// First way to create an object
let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    // This is short way to create a function in an object (fullDetails: function() {})
    fullDetails() {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
    },
};
/*
Second way to create a function
let member2 = new Object({name: "Ahmed"})
---------------+++++++++++++---------------
Third way to create a function
let member3 = Object.create({name: "Mohamed"})
---------------+++++++++++++---------------
Fourth and last way to create a function
let member4 = Object.assign({name: "Gafar"})
---------------+++++++++++++---------------
*/
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
