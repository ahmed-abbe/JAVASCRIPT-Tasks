function createSelectBox(startYear, endYear) {
    document.write(`<Select>`);

    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`);
    }

    document.write(`</Select>`);
}
createSelectBox(2000, 2021);
