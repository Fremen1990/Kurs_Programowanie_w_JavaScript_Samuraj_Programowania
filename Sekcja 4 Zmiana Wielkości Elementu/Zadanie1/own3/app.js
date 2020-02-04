document.body.style.height = "10000vh";

const square = document.createElement("div");
document.body.appendChild(square);

let grow = true;
let size = 25;

square.style.backgroundColor = "black";
square.style.height = `${size}px`
square.style.width = `${size}px`;
square.style.position = "fixed";
square.style.left = "50%";
square.style.top = "50%";
square.style.transform = "translate(-50%, -50%)";

document.addEventListener("scroll", () => {
    if (grow) {
        size += 20;
        square.style.height = `${size}px`
        square.style.width = `${size}px`
    } else {
        size -= 20;
        square.style.height = `${size}px`
        square.style.width = `${size}px`
    }

    if (size > window.innerHeight / 2) {
        grow = !grow
    } else if (size < 0) {
        grow = !grow
    }
})