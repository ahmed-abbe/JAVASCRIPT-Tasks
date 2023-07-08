let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
divOne.title = divOne.className;
divTwo.title = divTwo.className;

let txt = divOne.innerHTML;

divOne.innerHTML = divTwo.innerHTML;
divTwo.innerHTML = txt + " " + document.querySelectorAll("div").length;
