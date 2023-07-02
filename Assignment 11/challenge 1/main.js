/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Omar",
    "Othman",
    "Amany",
    "Samia",
    "Anwar",
];
let index = myAdmins.slice(0, myAdmins.indexOf("Stop")).length;
let counter = 0;

document.write(`<div>We Have ${index} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < index; i++) {
    document.write(`<div>`);
    document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members: </h3>`);
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0].toLowerCase() === myAdmins[i][0].toLowerCase()) {
            document.write(`<p>- ${++counter} ${myEmployees[j]}</p>`);
        }
    }
    counter = 0;
    document.write(`<hr>`);
    document.write(`</div>`);
}
