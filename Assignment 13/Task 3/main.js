/*
    function checker(zName) {
        return function (status) {
            return function (salary) {
                return status === "Available"
                    ? `${zName}, My Salary Is ${salary}`
                    : `Iam Not Avaialble`;
            };
        };
    }
*/

let checker =
    (zName = "Unknown") =>
    (status = "Available") =>
    (salary = "Unknown") =>
        status === "Available"
            ? `I Am ${zName}, My Salary Is ${salary}`
            : `I Am No Available`;

console.log(checker("Osama")("Available")(4000)); // i Am Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
console.log(checker("Mohamed")("Available")(1_000_000)); // i Am Mohamed, My Salary Is 1000000
