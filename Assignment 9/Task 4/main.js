let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

let word = words.slice(words.indexOf("Elzero"))[0][0].slice(2, 6).toUpperCase();

console.log(word); // ZERO
