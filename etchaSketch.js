let selectedRows = 4;

var mouseDown = false;
document.addEventListener("mousedown", () => {
    console.log("mouse pressed")
    mouseDown = true;
    console.log(mouseDown)
})
document.addEventListener("mouseup", () => {
    console.log("mouse release")
    mouseDown = false;
    console.log(mouseDown)
})



function createDivs (numOfRows) {
    let numOfDivs = numOfRows * numOfRows;
    const container = document.querySelector("#container");

    for (let i=0; i<numOfDivs; i++){
        const div = document.createElement('div');
        div.classList.add('paintBlock', 'base')
        div.setAttribute('style', 
        `aspect-ratio: 1/1; height: calc(80vh/${numOfRows});`)
        container.appendChild(div);
    }

}


createDivs(selectedRows);


function coloringBoxes () {
    let boxes = document.querySelectorAll('.paintBlock');

    for (let i=0; i<boxes.length; i++){
        boxes[i].addEventListener('mouseover', () => {
            if(mouseDown!=false){
                boxes[i].classList.add("colored");
                boxes[i].classList.remove("base");
            }else
            boxes[i].classList.add("hovered");
        })
        boxes[i].addEventListener('mouseout', () => {
            boxes[i].classList.remove("hovered");
        } );
    }
}

coloringBoxes()