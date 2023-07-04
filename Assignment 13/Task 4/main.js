function specialMix(...data) {
    // Your Code Here
    let result = 0;
    for (let i = 0, n = data.length; i < n; i++) {
        if (Number.isInteger(parseInt(data[i]))) {
            result += parseInt(data[i]);
        }
    }
    return result || `All Is String`;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
