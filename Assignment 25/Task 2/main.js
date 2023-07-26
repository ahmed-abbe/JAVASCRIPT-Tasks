let req = new XMLHttpRequest();

req.open("GET", "./articles.json");
req.send();

req.addEventListener("readystatechange", function () {
    if (req.readyState === 4 && req.status === 200) {
        console.log(req.responseText);
        console.log("Data Loaded");
    }
});
