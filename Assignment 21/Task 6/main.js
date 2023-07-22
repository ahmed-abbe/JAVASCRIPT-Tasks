let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let numbers = chars.filter((e) => Number.isInteger(e));
chars = chars.filter((e) => isNaN(e));

i = numbers.length;

console.log(numbers.concat(chars).copyWithin(0, i, i + i));

// Needed Output
//['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
