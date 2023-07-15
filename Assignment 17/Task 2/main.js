// Get the add input and remove input
let addInput = document.querySelector("[class*='add']");
let rmvInput = document.querySelector("[class*='remove']");

// Get the div where the classes will be added/removed
let myDiv = document.querySelector("[class*='list'] > div");

displayClasses();

// Add the classes after exit the add input
addInput.addEventListener("blur", function () {
    addInput.value
        .split(" ")
        .forEach((ele) => myDiv.classList.add(ele.toLowerCase()));
    displayClasses();
    addInput.value = "";
});

// Remove The class After exit the remove input
rmvInput.addEventListener("blur", function () {
    rmvInput.value
        .split(" ")
        .forEach((ele) => myDiv.classList.remove(ele.toLowerCase()));
    displayClasses();
    rmvInput.value = "";
});

// make sure the div has classes or display a message
function displayClasses() {
    let classes = myDiv.classList;
    let index = classes.length;
    let classesList = [];
    if (index === 0) {
        myDiv.innerHTML = "No Classes To Show";
    } else {
        for (let i = 0; i < index; i++) {
            classesList.push(classes[i]);
        }
        classesList.sort();
        myDiv.innerHTML = "";
        for (let j = 0; j < index; j++) {
            myDiv.innerHTML += `<span>${classesList[j]}</span>`;
        }
    }
}
