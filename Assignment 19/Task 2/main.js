// after search can use session storage to do the same in more easy way
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("mail");
let passInput = document.getElementById("pass");
let select = document.querySelector("select");

window.onbeforeunload = () => {
    localStorage.unloadtime = Math.floor(+new Date() / 1000);
};
window.onload = () => {
    localStorage.loadtime = Math.floor(+new Date() / 1000);
    let time = +localStorage.loadtime - +localStorage.unloadtime;
    if (time > 3) {
        localStorage.clear();
    }
    if (localStorage.name) {
        nameInput.value = localStorage.name;
    }
    if (localStorage.email) {
        emailInput.value = localStorage.email;
    }
    if (localStorage.password) {
        passInput.value = localStorage.password;
    }
    if (localStorage.select) {
        select.value = localStorage.select;
    }
};

nameInput.oninput = () => localStorage.setItem("name", nameInput.value);
emailInput.oninput = () => localStorage.setItem("email", emailInput.value);
passInput.oninput = () => localStorage.setItem("password", passInput.value);
select.onchange = () => localStorage.setItem("select", select.value);
