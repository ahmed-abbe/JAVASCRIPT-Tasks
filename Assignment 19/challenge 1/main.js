let div = document.querySelector("div");
let submit = document.querySelector("input[type='submit']");
let input = document.querySelector("input[type='text']");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let i = tasks.length === 0 ? 0 : tasks.length - 1;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let task = {};
    if (input.value) {
        task.id = i;
        task.title = input.value;
        tasks.push(task);
        localStorage.tasks = JSON.stringify(tasks);
        add(task);
        del(document.querySelectorAll("button"));
        i++;
    }
});

if (localStorage.tasks) {
    tasks.forEach((ele) => {
        add(ele);
        del(document.querySelectorAll("button"));
    });
}

function add(ele) {
    let par = document.createElement("p");
    let btn = document.createElement("button");
    par.id = ele["id"];
    par.textContent = ele["title"];
    btn.textContent = "Delete";
    par.appendChild(btn);
    div.appendChild(par);
}

function del(btns) {
    btns.forEach((ele) => {
        ele.addEventListener("click", () => {
            for (let i = 0, n = tasks.length; i < n; i++) {
                if (+tasks[i].id === +ele.parentElement.id) {
                    tasks.splice(i, 1);
                    break;
                }
            }
            ele.parentElement.remove();
            localStorage.tasks = JSON.stringify(tasks);
        });
    });
}
