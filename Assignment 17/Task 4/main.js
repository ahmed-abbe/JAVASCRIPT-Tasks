let mySpan = document.querySelector("span");
let myComment = mySpan.nextSibling.nextSibling;
mySpan.remove();
myComment.remove();
console.log(document.querySelector("div").innerText);
