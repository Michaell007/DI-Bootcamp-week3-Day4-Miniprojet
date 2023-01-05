// initialisation
let color = "";

// clear btn and function clear
let btnClear = document.querySelector("button");
btnClear.addEventListener("click", () => {
    // all div grid
    let allDivGrid = document.querySelectorAll("#main div");
    allDivGrid.forEach(el => (el.style.backgroundColor = null) );
})

// get all div color and set event each elements
let allDivColored = document.querySelectorAll("#sidebar div");
allDivColored.forEach(el => {
    el.addEventListener("click", () => {
        color = el.style.backgroundColor;
    })
})

let isClicked = false;
// all div grid
let allDivGrid = document.querySelectorAll("#main div");
allDivGrid.forEach(el => {
    el.addEventListener("click", () => {
        el.style.backgroundColor = color;
    })
    
    el.addEventListener("mousedown", () => {
        isClicked = true;
        el.style.backgroundColor = color;
    })

    el.addEventListener("mouseup", () => {
        isClicked = false;
    })

    el.addEventListener("mouseover", () => {
        isClicked ? (el.style.backgroundColor = color) : "";
    })

})




