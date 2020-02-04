const div = document.createElement("div");
document.body.appendChild(div);

div.style.backgroundColor = "black";
div.style.height = "150px";
div.style.width = "150px";
div.style.position = "fixed";
div.style.cursor = "pointer";

let ofsetX;
let ofsetY;
let moveFlag = false;

div.addEventListener("mousedown", (e) => {
    console.log("klik")
    div.style.backgroundColor = "gray"
    ofsetX = e.offsetX;
    ofsetY = e.offsetY;
    moveFlag = !moveFlag;
})

div.addEventListener("mousemove", (e) => {
    console.log("move")
    if (moveFlag) {
        let moveX = e.clientX;
        let moveY = e.clientY;
        div.style.left = `${moveX-ofsetX}px`;
        div.style.top = `${moveY-ofsetY}px`;
    }
})

div.addEventListener("mouseup", () => {
    console.log("odklik")
    div.style.backgroundColor = "black";
    moveFlag = !moveFlag;
})