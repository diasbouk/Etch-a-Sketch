
const body = document.querySelector("#body");

// Loop to create 16 * 16 box
for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    body.appendChild(box);
    for (let j = 0; j < 16; j++)
    {
        let smallbox = document.createElement("div");
        smallbox.setAttribute("class", "smallbox");
    box.appendChild(smallbox);
    }
    
}