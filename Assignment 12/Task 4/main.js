function checkStatus(a, b, c) {
    let theName = typeof a == "string" ? a : typeof b == "string" ? b : c;
    let theAge = typeof a == "number" ? a : typeof b == "number" ? b : c;
    let con = typeof a == "boolean" ? a : typeof b == "boolean" ? b : c;
    if (con === true) {
        console.log(
            `Hello ${theName}, Your Age Is ${theAge}, You Are Available For Hire`
        );
    } else {
        console.log(
            `Hello ${theName}, Your Age Is ${theAge}, You Are Not Available For Hire`
        );
    }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
