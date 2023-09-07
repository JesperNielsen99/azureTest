let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Tryk mig for set color";
let bdy = document.querySelector("body");
console.log(bdy);

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

const inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);

const inpColorPicker = document.getElementById("inpColorPicker");

function useColorPicker() {
    let col = inpColorPicker.value;
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

inpColorPicker.addEventListener('input', useColorPicker);
pbCol.addEventListener('click', setBackgroundColor);