let div = document.createElement("div");
div.innerHTML = "10";

document.body.prepend(div);

setInterval(function () {
    div.innerHTML--;
    if (+div.innerHTML === 0) {
        location.href = "https://elzero.org";
    }
}, 500);
