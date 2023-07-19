let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let title, age, available, skills, skill;

if (chosen === 1) {
    [
        {
            title,
            age,
            available,
            skills: [, skill],
        },
    ] = myFriends;
} else if (chosen === 2) {
    [
        ,
        {
            title,
            age,
            available,
            skills: [, skill],
        },
    ] = myFriends;
} else {
    [
        ,
        ,
        {
            title,
            age,
            available,
            skills: [, skill],
        },
    ] = myFriends;
}
console.log(title, age, available ? "Available" : "Not Available", skill);
// If chosen === 1
/*
    ("Osama");
    39;
    ("Available");
    ("CSS");
*/
// If chosen === 2
/*
    ("Ahmed");
    25;
    ("Not Available");
    ("Django");
*/
// If chosen === 3
/*
    ("Sayed");
    33;
    ("Available");
    ("Laravel");
*/
