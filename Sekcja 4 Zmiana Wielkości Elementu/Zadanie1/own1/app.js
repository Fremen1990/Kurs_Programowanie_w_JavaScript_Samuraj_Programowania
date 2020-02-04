const obiekt = document.createElement("div");
document.body.appendChild(obiekt);
obiekt.style.backgroundColor = "black"

let size = 15;
let flag = true;

obiekt.style.height = `${size}px`
obiekt.style.width = `${size}px`


document.addEventListener("scroll", () => {

    if (flag) {
        size += 10;
        obiekt.style.height = `${size}px`;
        obiekt.style.width = `${size}px`;
    } else {
        size -= 10;
        obiekt.style.height = `${size}px`;
        obiekt.style.width = `${size}px`;
    }

    if (size >= window.innerHeight / 3) {
        flag = !flag
    } else if (size < 0) {
        flag = !flag
    }
})