

function createDivs (numOfRows) {
    let numOfDivs = numOfRows * numOfRows;
    const container = document.querySelector("#container");

    for (let i=0; i<numOfDivs; i++){
        const div = document.createElement('div');
        div.setAttribute('style', 
        `background-color: black; aspect-ratio: 1/1; height: calc(80vh/${numOfRows});`)
        container.appendChild(div);
    }

}

createDivs(4);


