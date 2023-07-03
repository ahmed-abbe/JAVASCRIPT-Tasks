function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100) {
        console.log("Age Out Of Range");
        return;
    }
    console.log(theAge * 12);
    console.log(theAge * 12 * 4);
    console.log(theAge * 365);
    console.log(theAge * 365 * 60);
    console.log(theAge * 365 * 60 * 60);
    console.log(theAge * 365 * 60 * 60 * 60);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
