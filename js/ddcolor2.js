console.log("er i ddcolor2")

const colArray2 = [["rød", "#ff0000"], ["green", "#00ff00"], ["yellow", "#ffff00"], ["blue", "#0000ff"], ["orange", "#00ffff"]]

const pbFillDropdown2 = document.getElementById("pbFillDropdown2")
const ddColor2 = document.getElementById("ddColor2")
const body2 = document.body
const colorObjects = [{"name": "red", "id": "#ff0000"},{"name": "green", "id": "#00ff00"}]

function addColors2() {
    ddColor2.innerHTML = ""
    colorObjects.forEach(fillDropdown2)
}

function fillDropdown2(item) {
    const element = document.createElement("option")
    element.textContent = item.name
    element.value = item.id
    ddColor2.appendChild(element)
}

function setBackgroundColor2() {
    const selIndex = ddColor2.selectedIndex
    const selectedOption = ddColor2.options[selIndex]
    body2.style.backgroundColor = selectedOption.value;
}

pbFillDropdown2.addEventListener('click', addColors2)
ddColor2.addEventListener('change', setBackgroundColor2)