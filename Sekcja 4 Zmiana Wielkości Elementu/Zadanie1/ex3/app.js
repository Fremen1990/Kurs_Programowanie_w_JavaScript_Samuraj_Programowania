const div = document.createElement("div");
document.body.appendChild(div);

let size = 25;
let grow = true;

div.style.height = `${size}px`
div.style.width = `${size}px`


document.addEventListener("scroll", () => {

    if (grow) {
        size += 10;
        div.style.height = `${size}px`
        div.style.width = `${size}px`
    } else {
        size -= 10;
        div.style.height = `${size}px`
        div.style.width = `${size}px`
    }


    if (size > window.innerHeight / 2) {
        grow = !grow
    } else if (size < 0) {
        grow = !grow
    }
})