const colArray = ["red", "green", "yellow", "blue", "orange"]
const pbFillDropdown = document.getElementById("pbFillDropdown")
const ddColor = document.getElementById("ddColor")
const body = document.body

function addColors() {
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown)
}

function fillDropdown(item) {
    const element = document.createElement("option")
    element.textContent = item
    ddColor.appendChild(element)
}

function setBackgroundColor() {
    const selIndex = ddColor.selectedIndex
    const selectedOption = ddColor.options[selIndex]
    body.style.backgroundColor = selectedOption.innerText;
}

pbFillDropdown.addEventListener('click', addColors)
ddColor.addEventListener('change', setBackgroundColor)

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor;
}

// Set an interval to change the background color every 10 seconds
const intervalId = setInterval(changeBackgroundColor, 1);

// Stop the interval when the browser is closed
window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
});
