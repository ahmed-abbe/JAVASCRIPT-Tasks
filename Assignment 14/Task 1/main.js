let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix
    .map((a) => (Number.isInteger(a) ? "" : a))
    .reduce((acc, current) => acc + current);
console.log(result);
