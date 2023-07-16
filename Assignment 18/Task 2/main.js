// Create elemnts needed in the popup window
let div = document.createElement("div");
let btn = document.createElement("button");
let heading = document.createElement("h3");
let paragraph = document.createElement("p");

// Change the font family in body to arial
document.body.style.fontFamily = "Arial";

// style elements then add them to the page
setTimeout(function () {
    div.style.cssText =
        "width: 300px;\
        box-sizing: border-box;\
        position: absolute;\
        top: 50%; left: 50%;\
        transform: translate(-50%, -50%);\
        background-color: #eee;\
        text-align: center;";

    btn.innerHTML = "x";
    btn.style.cssText =
        "display: grid;\
        place-items: center;\
        width: 30px;\
        height: 30px;\
        font-size: 18px;\
        background-color: red;\
        color: white;\
        position: absolute;\
        right: -10px;\
        top: -10px;\
        border: 1px solid white;\
        border-radius: 50%;\
        cursor: pointer;";

    heading.innerHTML = "Welcome";
    paragraph.innerHTML = "Welcome To Elzero Web School";

    div.appendChild(btn);
    div.appendChild(heading);
    div.appendChild(paragraph);
    document.body.prepend(div);
}, 5000);
btn.addEventListener("click", () => div.remove());
