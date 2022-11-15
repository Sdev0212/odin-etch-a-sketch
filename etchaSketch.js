

function createDivs (numOfRows) {
    let numOfDivs = numOfRows * numOfRows;
    const container = document.querySelector("#container");

    for (let i=0; i<numOfDivs; i++){
        const div = document.createElement('div');
        div.classList.add('paintBlock')
        div.setAttribute('style', 
        `aspect-ratio: 1/1; height: calc(80vh/${numOfRows});`)
        container.appendChild(div);
    }

}

createDivs(4);

let boxes = document.querySelectorAll('.paintBlock');
for (let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('mouseover', () => {
        boxes[i].classList.add("hovered");
    } );
}

for (let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('mouseout', () => {
        boxes[i].classList.remove("hovered");
    } );
}
