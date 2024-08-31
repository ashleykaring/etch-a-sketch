const DEFAULT_SIZE = 16;

window.onload = () => makeGrid(DEFAULT_SIZE);

function makeGrid(size) {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    let elementSize = 500 / size;

    for (let i = 1; i <= size ** 2; i++) {
        let gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.width = `${elementSize}px`;
        gridElement.style.height = `${elementSize}px`;
        gridElement.style.border = "1px solid black";

        gridElement.addEventListener("click", () => gridElement.style.backgroundColor = "yellow")

        gridElement.addEventListener("mouseover", () => gridElement.style.backgroundColor = "#A9A9A9");
        //gridElement.addEventListener("mouseout", () => gridElement.style.backgroundColor = "gray");

        container.appendChild(gridElement);
    }
}

let button = document.getElementById("new");
button.addEventListener("click", () => newGrid(prompt("Please enter the width/height")));

function newGrid(size) {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    size = parseInt(size);
    if (size > 100 || size < 1 || isNaN(size)) {
        alert("Size not valid, needs to be a number between 1 and 100");
    } else {
        makeGrid(size);
    }
}
