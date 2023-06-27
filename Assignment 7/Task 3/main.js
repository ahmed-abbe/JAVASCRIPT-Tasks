let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
if (num1 < num3 && num1 !== num3) {
    console.log(
        "30 Is Larger Than 10 And Type string Not The Same Type As number"
    );
}

if (num1 < num2 && num2 == num3 && num2 !== num3) {
    console.log(
        "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
}

if (num3 !== num1 && typeof num2 != typeof num3) {
    console.log(
        "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    );
}
