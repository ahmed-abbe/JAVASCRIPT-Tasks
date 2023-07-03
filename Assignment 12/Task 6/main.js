function multiply(...numbers) {
    let total = 1;

    for (let i = 0, n = numbers.length; i < n; i++) {
        numbers[i] = Math.trunc(numbers[i]);

        if (!Number.isInteger(numbers[i])) {
            continue;
        }

        total *= numbers[i];
    }

    console.log(total);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
