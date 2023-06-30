let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(zero, ++counter).reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.length - --counter, counter)); // ["Elham", "Mazero"]

console.log(my[++zero].slice(--zero, --counter) + my[counter].slice(counter)); // "Elzero"

console.log(my[counter++].slice(++counter, ++counter) + my[zero][zero]); // "rO"
