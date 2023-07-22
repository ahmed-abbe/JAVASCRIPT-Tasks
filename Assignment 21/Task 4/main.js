let theNumber = 100020003000;

let myarr = [...new Set(theNumber.toString())];

myarr.splice(1, 1);

console.log(myarr);
// Needed Output
// 123
