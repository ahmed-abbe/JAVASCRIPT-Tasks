fetch("./articles.json")
    .then((data) => data.json())
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
    .catch((error) => console.log("error"));
