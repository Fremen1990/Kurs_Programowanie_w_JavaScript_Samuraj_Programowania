document.body.style.height = "10000vh";

const obiekt = document.createElement("div");
document.body.appendChild(obiekt);

obiekt.style.backgroundColor = "black";
obiekt.style.height = "25px";
obiekt.style.width = "25px";
obiekt.style.position = "fixed";
obiekt.style.left = "50%";
obiekt.style.top = "50%";
obiekt.style.transform = "translate(-50%, -50%)"

let size = 10;
let flag = true;

window.addEventListener("scroll", () => {
    if (flag) {
        size += 10;
        obiekt.style.height = `${size}px`;
        obiekt.style.width = `${size}px`;
    } else {
        size -= 10;
        obiekt.style.height = `${size}px`
        obiekt.style.width = `${size}px`
    }


    if (size > window.innerHeight / 2) {
        flag = !flag
    } else if (size < 0) {
        flag = !flag
    }


})