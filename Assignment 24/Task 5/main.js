let before = Math.trunc(performance.now());

let i = 0;
let result = 99999;

for (; i <= result; i++) {
    console.log(i);
}

let after = Math.trunc(performance.now());

console.log(after - before);

// Needed Output
/*
    "Loop Took 1921 Milliseconds."
*/
