const object = document.querySelector("div");

let movement = false
let offsetX;
let offsetY;

object.addEventListener("mousedown", (e) => {
    console.log("klkik")
    object.style.backgroundColor = "yellow"
    movement = !movement;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    object.style.borderRadius = "50%"
    object.textContent = "NAKLIKNIĘTE!!! :D"
    object.style.textAlign = "center"
    object.style.lineHeight = "250px"
    object.style.fontSize = "25px"
})

object.addEventListener("mousemove", (e) => {
    if (movement) {
        moveX = e.clientX;
        moveY = e.clientY;
        object.style.left = `${moveX-offsetX}px`;
        object.style.top = `${moveY-offsetY}px`;
    }

})

object.addEventListener("mouseup", () => {
    object.style.backgroundColor = "green"
    movement = !movement
    object.style.borderRadius = "0%"
    object.textContent = "KLIKNIJ MNIE!!! :D"
    object.style.textAlign = "center"
    object.style.lineHeight = "250px"
    object.style.fontSize = "25px"
    object.style.color = "red"

})