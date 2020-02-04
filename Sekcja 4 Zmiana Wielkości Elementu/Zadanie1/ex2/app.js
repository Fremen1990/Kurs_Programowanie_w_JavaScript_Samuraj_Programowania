const kwadrat = document.createElement("div");
document.body.appendChild(kwadrat);

let size = 100;
let grow = true;

kwadrat.style.height = size + "px";
kwadrat.style.width = size + "px";

document.addEventListener("scroll", function () {
    console.log("scroll")
    if (grow) {
        size += 10;
        kwadrat.style.height = size + "px";
        kwadrat.style.width = size + "px";
    } else {
        size -= 10;
        kwadrat.style.height = size + "px";
        kwadrat.style.width = size + "px";
    }

    if (size >= window.innerHeight / 2) {
        grow = !grow
    } else if (size < 0) {
        grow = !grow
    }

})