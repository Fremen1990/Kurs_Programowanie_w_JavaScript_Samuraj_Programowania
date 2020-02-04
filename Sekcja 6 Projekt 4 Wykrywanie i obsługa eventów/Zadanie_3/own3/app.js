const square = document.querySelector("div");

let moveFlag = false;
let moveX;
let moveY;
let ofX;
let ofY;

square.addEventListener("mousedown", (e) => {
    square.style.backgroundColor = "green";
    moveFlag = !moveFlag;
    ofX = e.offsetX;
    ofY = e.offsetY;
})

square.addEventListener("mousemove", (e) => {
    if (moveFlag) {
        moveX = e.clientX;
        moveY = e.clientY;
        square.style.left = `${moveX-ofX}px`;
        square.style.top = `${moveY-ofY}px`;
    }
})

square.addEventListener("mouseup", () => {
    square.style.backgroundColor = "black";
    moveFlag = !moveFlag;
})