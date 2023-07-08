// declare all variables
let num = document.querySelector('[type="number"]'),
    text = document.querySelector('[type="text"]'),
    type = document.querySelector('[name="type"]'),
    submit = document.querySelector('[type="submit"]'),
    results = document.querySelector(".results");

// Style Elements With CSS;
document.body.style.backgroundColor = "#EEE";
document.forms[0].style.display = "flex";
document.forms[0].style.flexDirection = "column";
document.forms[0].style.alignItems = "center";

// declare variables to store the values of the elment type and the number value
let elementType, count;

submit.onclick = function (event) {
    event.preventDefault();

    elementType = type.value || "div";
    count = num.value;
    results.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let element = document.createElement(elementType);
        element.className = "box";
        element.title = "Element";
        element.id = "id-" + (i + 1);
        element.textContent = text.value || "Empty";
        results.appendChild(element);
    }
};
