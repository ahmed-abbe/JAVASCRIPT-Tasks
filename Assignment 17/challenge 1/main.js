// Start header
let header = document.createElement("header");
let headerDiv = document.createElement("div");
let ul = document.createElement("ul");

// Add Text to a then add it li thn add li to the ul
let liText = ["Home", "About", "Service", "Contact"];
for (let i = 0, n = liText.length; i < n; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.append(liText[i]);
    a.setAttribute("href", "#");
    a.style.color = "#333";
    a.style.textDecoration = "none";
    li.appendChild(a);
    li.style.cssText = "margin-left: 10px";
    ul.appendChild(li);
}
// Add the text to the child div of the header
headerDiv.className = "Logo";
headerDiv.textContent = "Elzero";

// Style the header and its' children
header.style.cssText =
    "display: flex; align-items: center; justify-content: space-between; min-height: 45px; padding: 5px 10px";
headerDiv.style.cssText = "color: #23a96e; font-size: 25px; font-weight: bold;";
ul.style =
    "display: flex; align-items: center; margin: 0; padding: 0; list-style: none;";

// Add to header
header.appendChild(ul);
header.prepend(headerDiv);

// Start main
let main = document.createElement("main");
main.className = "products";

// add products to main element
for (let i = 0; i < 15; i++) {
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    let span = document.createElement("Span");
    heading.textContent = i + 1;
    span.textContent = "Product";
    span.style.cssText = "color: #777; font-size: 14px;";
    heading.style.cssText = "font-weight: 600; margin: 10px 0";
    div.appendChild(heading);
    div.appendChild(span);
    div.className = "product";
    div.style.cssText =
        "text-align: center; padding: 10px; border-radius: 8px; background-color: white; flex-basis: calc((100% - 100px)/ 3)";
    main.appendChild(div);
}
// Style main element
main.style.cssText =
    "display: flex; align-items: center; justidy-content: center; gap: 20px; flex-wrap: wrap; background-color: #ececec; padding: 15px;";

//Start Footer
let footer = document.createElement("footer");
footer.textContent = "Copyright 2021";
footer.style.cssText =
    "text-align: center; padding: 20px; background-color: #23a96e; color: white;";

// Add elements to body
document.body.prepend(footer);
document.body.prepend(main);
document.body.prepend(header);

// Style body
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";
