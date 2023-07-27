function getData(link) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.onload = function () {
            if ((this.readyState === 4) & (this.status === 200)) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(Error("No Data Founded"));
            }
        };

        req.open("GET", link);
        req.send();
    });
}

getData("./articles.json")
    .then((data) => {
        for (let i = 0; i < 5; i++) {
            let div = document.createElement("div");
            let head = document.createElement("h3");
            let p = document.createElement("p");
            head.innerHTML = data[i].title;
            div.appendChild(head);
            p.innerHTML = data[i].description;
            div.append(p);
            document.body.appendChild(div);
        }
    })
    .catch((error) => {
        console.log(error);
    });
