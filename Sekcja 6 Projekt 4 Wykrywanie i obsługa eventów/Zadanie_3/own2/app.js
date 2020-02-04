const object = document.createElement("div");
document.body.appendChild(object);

object.style.backgroundColor = "black";
object.style.height = "200px";
object.style.width = "200px";
object.style.position = "fixed";
object.style.cursor = "pointer";


let moveFlag = false;
let moveX;
let moveY;
let ofX;
let ofY;

object.addEventListener("mousedown", (e) => {
    object.style.backgroundColor = "yellow";
    ofX = e.offsetX;
    ofY = e.offsetY;
    moveFlag = !moveFlag;
    console.log('klik')
})

object.addEventListener("mousemove", (e) => {
    if (moveFlag) {
        moveX = e.clientX;
        moveY = e.clientY;
        object.style.left = `${moveX-ofX}px`;
        object.style.top = `${moveY-ofY}px`;
    }
})

object.addEventListener("mouseup", () => {
    object.style.backgroundColor = "black";
    moveFlag = !moveFlag;
})