let start = 0;
let swappedName = "elZerO";

for (let i = 0; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        swappedName = swappedName.replace(
            swappedName[i],
            swappedName[i].toLowerCase()
        );
    } else {
        swappedName = swappedName.replace(
            swappedName[i],
            swappedName[i].toUpperCase()
        );
    }
}

console.log(swappedName);

/*
    Output:-
    "ELzERo"
*/
