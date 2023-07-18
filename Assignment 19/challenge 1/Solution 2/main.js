// first get elements from the page
let taskName = document.getElementById("name");
let submit = document.getElementsByTagName("input")[1];

// second create the ul
let ul = document.createElement("ul");

// create the tasks array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// create counter for id
let id = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;

// third Check if there something in the local storage
if (localStorage.tasks) {
    tasks.forEach((ele) => {
        add(ele);
    });
}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let text = taskName.value;
    taskName.value = "";

    // Make sure the user type in the input
    if (text.trim().length > 0) {
        // add the task with id to tasks array then add array to local stroage
        let task = {};
        task.id = id;
        task.title = text;
        tasks.push(task);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
        ++id;
        add(task);
    }
});

function add(text) {
    // create li and button elements
    let li = document.createElement("li");
    let btn = document.createElement("button");

    // add classes to the button
    btn.classList.add("delete");

    // add the text the user typed to the li then add btn to li
    btn.innerHTML = "delete";
    li.innerHTML = text.title;
    li.id = text.id;
    li.appendChild(btn);

    // add li to the ul element
    ul.appendChild(li);

    //then add ul to the body but make sure it doesb't exist in body already
    if (!document.querySelector("ul")) {
        document.body.appendChild(ul);
    }
}

// add event to document
document.addEventListener("click", (e) => {
    // if the element have been clicked has class delete will delete the element parent and update tasks array
    // then set new tasks to local stroage
    if (e.target.classList.contains("delete")) {
        for (let i = 0, n = tasks.length; i < n; i++) {
            if (+tasks[i].id === +e.target.parentElement.id) {
                tasks.splice(i, 1);
                e.target.parentElement.remove();
                localStorage.setItem("tasks", JSON.stringify(tasks));
                break;
            }
        }
        if (!document.querySelector("ul > li")) {
            document.querySelector("ul").remove();
        }
    }
});
