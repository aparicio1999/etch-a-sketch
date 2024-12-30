let body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

let container = document.querySelector("#container");

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "2px";

let btn = document.createElement("button");
btn.textContent = "Change grid size";
btn.addEventListener("click", ()=>{
    let n = +prompt("How many squares per side?");
    drawNewGrid(n);
})
container.appendChild(btn);

function drawNewGrid(n) {
    container.replaceChildren(container.firstChild); 
    size = Math.floor(800/n)+1;
    for (let i=0;i<n;i++) {
        let newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        newRow.style.display = "flex";
        newRow.style.gap = "2px"
        for (let j=0;j<n;j++) {
            let newCard = document.createElement("div");
            newCard.setAttribute("class", "card");
            newCard.style.backgroundColor = "white";
            newCard.style.width = `${size}px`;
            newCard.style.height = `${size}px`;
            newCard.style.opacity = 0;
            newRow.appendChild(newCard);
        }
        container.appendChild(newRow);
    }
}

for (let i=0;i<4;i++) {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    newRow.style.display = "flex";
    newRow.style.gap = "2px"
    for (let j=0;j<4;j++) {
        let newCard = document.createElement("div");
        newCard.setAttribute("class", "card");
        newCard.style.backgroundColor = "blue";
        newCard.style.width = "200px";
        newCard.style.height = "200px";
        newCard.style.opacity = 0;
        newRow.appendChild(newCard);
    }
    container.appendChild(newRow);
}

container.addEventListener("mouseover", (e)=>{
    let target =  e.target;
    if (target.className == "card") {
        // target.style.backgroundColor = (getComputedStyle(target).backgroundColor === "rgb(255, 0, 0)") ? "blue" : "red";
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        target.style.backgroundColor = `rgb(${r},${g},${b})`;
        let currentOpacity = parseFloat(getComputedStyle(target).opacity);
        currentOpacity = Math.min(currentOpacity + 0.1, 1);
        target.style.opacity = currentOpacity;
    }
})