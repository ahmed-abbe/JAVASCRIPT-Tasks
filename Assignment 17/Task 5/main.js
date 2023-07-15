document.addEventListener("click", function (event) {
    if (event.target.tagName !== "HTML" && event.target.tagName !== "BODY") {
        console.log(`This Is ${event.target.tagName.toLowerCase()}`);
    }
});
