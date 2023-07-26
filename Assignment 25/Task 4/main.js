let req = new XMLHttpRequest();

req.open("GET", "./articles.json");
req.send();

let parentDiv = document.createElement("div");
parentDiv.id = "data";
document.body.prepend(parentDiv);

req.addEventListener("readystatechange", function () {
    if (req.readyState === 4 && req.status === 200) {
        let mainData = JSON.parse(req.response);
        mainData.forEach((ele) => {
            let childdiv = document.createElement("div");
            let content = `
            <h2>${ele["article title"]}</h2>
            <p>${ele["article content"]}</p>
            <p>Author: ${ele["writer"]}</p>
            <p>Category: ${ele["article type"]}</p>
            `;
            childdiv.innerHTML = content;
            parentDiv.append(childdiv);
        });
    }
});
