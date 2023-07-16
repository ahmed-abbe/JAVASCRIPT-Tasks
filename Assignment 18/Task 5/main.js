let div = document.createElement("div");
div.innerHTML = "10";

document.body.prepend(div);

let id = setInterval(function () {
    div.innerHTML--;
    if (+div.innerHTML === 5) {
        window.open(
            "https:\\elzero.org",
            "_blank",
            "width=400, height=600; top=200, left=500"
        );
    }
    if (+div.innerHTML === 0) {
        clearInterval(id);
    }
}, 500);
