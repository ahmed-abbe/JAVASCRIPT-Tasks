let st = "Elzero Web School";

if (st.toLowerCase()[st.indexOf("W")] === "w") {
    console.log("Good");
}

if (st !== "string") {
    console.log("Good");
}

if (!(st === "number")) {
    console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
