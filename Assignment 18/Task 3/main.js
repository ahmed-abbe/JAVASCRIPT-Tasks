let div = document.createElement("div");
div.innerHTML = "10";

document.body.prepend(div);

let id = setInterval(counter, 500);

function counter() {
    div.innerHTML--;
    if (+div.innerHTML === 0) {
        clearInterval(id);
    }
}
