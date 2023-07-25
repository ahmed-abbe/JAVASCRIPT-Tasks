let dateNow = new Date();
let birthDate = new Date(2003, 6, 15);

let difDate = dateNow - birthDate;

difDate /= 1000;
console.log(parseInt(difDate) + " Seconds"); // Seconds

difDate /= 60;
console.log(parseInt(difDate) + " Minutes"); // Minutes

difDate /= 60;
console.log(parseInt(difDate) + " Hours"); // Hours

difDate /= 24;
console.log(parseInt(difDate) + " Days"); // Days

difDate /= 356;
console.log(parseInt(difDate) + " Years"); // Years
