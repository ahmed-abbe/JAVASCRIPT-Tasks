let myDiv = document.querySelector("div");
let myP = document.querySelector("p");
myP.remove();

let firstDiv = document.createElement("div");
let lastDiv = document.createElement("div");

firstDiv.className = "start";
lastDiv.className = "end";

firstDiv.title = "start";
lastDiv.title = "end";

firstDiv.setAttribute("data-Value", "start");
lastDiv.setAttribute("data-Value", "end");

firstDiv.textContent = "start";
lastDiv.textContent = "end";

myDiv.before(firstDiv);
myDiv.after(lastDiv);
