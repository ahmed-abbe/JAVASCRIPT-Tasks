let input = document.forms[0].dollar,
    result = document.getElementsByClassName("result")[0];

input.oninput = function () {
    result.textContent = `{${input.value || 0}} USD Dollar = {${
        (input.value * 30.66).toFixed(2) || 0
    }} Egyptian Pound`;
};
