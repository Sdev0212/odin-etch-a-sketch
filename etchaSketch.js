let selectedRows = 4;
let selectedColor = "#000000";
//set initial color choice and grid size

const inputs = document.querySelectorAll("input");
const rowSelection = document.querySelector("#rowNumber");
const clearButton = document.querySelector("#clearButton");
const colorPicker = document.querySelector("#colorPicker");
//set constants for inputs


createDivs(selectedRows)  //initialize divs on page startup

colorPicker.addEventListener('input', function(e) {
    selectedColor = colorPicker.value;
    return;
})
rowSelection.addEventListener('input', () =>{
    selectedRows = parseFloat(rowSelection.value)
    createDivs(selectedRows);
} )
clearButton.addEventListener('click', () => {
    document.querySelectorAll('.paintBlock').forEach(e => e.style.removeProperty("background-color"));
    document.querySelectorAll('.paintBlock').forEach(e => e.classList.add('base'));
}) //detect inputs

var mouseDown = false;
document.addEventListener("mousedown", () => {
    mouseDown = true;
})
document.addEventListener("mouseup", () => {
    mouseDown = false;
}) //detects holding down mouse button and release




function createDivs (numOfRows) {
    let numOfDivs = numOfRows * numOfRows;
    const container = document.querySelector("#container");
    document.querySelectorAll('.paintBlock').forEach(e => e.remove());
    for (let i=0; i<numOfDivs; i++){
        const div = document.createElement('div');
        div.classList.add('paintBlock', 'base')
        div.setAttribute('style', 
        `aspect-ratio: 1/1; height: calc(80vh/${numOfRows});`)
        container.appendChild(div);
    }
    paintBoxes();
}
//canvas creation



function paintBoxes() {
    let boxes = document.querySelectorAll('.paintBlock');
    for (let i=0; i<boxes.length; i++){
        boxes[i].addEventListener('mousedown', () => {
            boxes[i].setAttribute('style', `background-color: ${selectedColor};aspect-ratio: 1/1; height: calc(80vh/${selectedRows});`);
            boxes[i].classList.remove("base");
            });
        boxes[i].addEventListener('mouseover', () => {
            if(mouseDown!=false){
                boxes[i].setAttribute('style', `background-color: ${selectedColor}; aspect-ratio: 1/1; height: calc(80vh/${selectedRows});`);
                boxes[i].classList.remove("base");
            }
            boxes[i].classList.add("hovered");
        })
        boxes[i].addEventListener('mouseout', () => {
            boxes[i].classList.remove("hovered");
        } );
    }
}
//logic for painting 



//possible future features:
//rainbow mode
//eraser on right click
//pick canvas color
//limit break: button that takes away the limit of divs
//with a warning that it may cause browser slowdown