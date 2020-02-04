const div = document.querySelector("div");

let flag = false;
let divX;
let divY;
let offsetX;
let offsetY;

div.addEventListener("mousedown", (e) => {
    console.log("mousedown")
    div.style.backgroundColor = "blue"
    flag = !flag;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
})

div.addEventListener("mousemove", (e) => {
    console.log("mousemovement")


    if (flag) {
        divX = e.clientX;
        divY = e.clientY;
        div.style.left = `${divX-offsetX}px`;
        div.style.top = `${divY-offsetY}px`
    }
})

div.addEventListener("mouseup", () => {
    console.log("mouseup")
    div.style.backgroundColor = "yellow"
    flag = !flag
})