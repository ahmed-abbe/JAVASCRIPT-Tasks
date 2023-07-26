let req = new XMLHttpRequest();

req.open("GET", "./articles.json");
req.send();

req.addEventListener("readystatechange", function () {
    if (req.readyState === 4 && req.status === 200) {
        let mainData = JSON.parse(req.response);
        mainData.forEach((ele) => (ele["article type"] = "All"));
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
});
