let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

let setNumber = setOfNumbers.keys(),
    lastNumber;

while (true) {
    let checkSet = setNumber.next();
    if (checkSet.done === true) {
        break;
    }
    lastNumber = checkSet.value;
}
console.log(lastNumber);

// Needed Output
/*
    Set(3) {10, 20, 2}
    2
*/
