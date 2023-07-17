let fonts = ["Cairo", "Roboto", "Open Sans"];
let colors = ["black", "red", "blue", "green", "yellow", "orange"];
let sizes = [];
for (let i = 16; i <= 30; i++) {
    sizes.push(i + "px");
}

let selects = document.querySelectorAll("select");

// Add options to select ignore this step
fonts.forEach(function (ele, index) {
    let opt = document.createElement("option");
    opt.value = ele;
    opt.innerHTML = ele;
    selects[0].append(opt);
});
colors.forEach(function (ele, index) {
    let opt = document.createElement("option");
    opt.value = ele;
    opt.innerHTML = ele;
    selects[1].append(opt);
});
sizes.forEach(function (ele, index) {
    let opt = document.createElement("option");
    opt.value = ele;
    opt.innerHTML = ele;
    selects[2].append(opt);
});

if (!localStorage.font) {
    document.body.style.fontFamily = fonts[0];
} else {
    document.body.style.fontFamily = localStorage.getItem("font");
    let opt = selects[0].querySelector(
        `option[value="${localStorage.getItem("font")}"]`
    );
    opt.setAttribute("selected", "");
}

if (!localStorage.color) {
    document.body.style.color = colors[0];
} else {
    document.body.style.color = localStorage.getItem("color");
    let opt = selects[1].querySelector(
        `option[value="${localStorage.getItem("color")}"]`
    );
    opt.setAttribute("selected", "");
}

if (!localStorage.size) {
    document.body.style.fontSize = sizes[0];
} else {
    document.body.style.fontSize = localStorage.getItem("size");
    let opt = selects[2].querySelector(
        `option[value="${localStorage.getItem("size")}"]`
    );
    opt.setAttribute("selected", "");
}

selects.forEach((ele) => {
    ele.addEventListener("change", () => {
        if (ele.id === "fonts") {
            localStorage.font = ele.value;
            document.body.style.fontFamily = ele.value;
        } else if (ele.id === "colors") {
            localStorage.color = ele.value;
            document.body.style.color = ele.value;
        } else {
            localStorage.size = ele.value;
            document.body.style.fontSize = ele.value;
        }
    });
});
