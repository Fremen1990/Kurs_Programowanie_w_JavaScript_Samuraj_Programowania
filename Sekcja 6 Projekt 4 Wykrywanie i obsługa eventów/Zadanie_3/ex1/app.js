const square = document.querySelector("div");

let divX = 150;
let divY = 50;

square.style.left = divX + "px"
square.style.top = divY + "px"

let drawActive = false;

let insertDivX;
let insertDivY;

square.addEventListener("mousedown", (e) => {
    console.log("wciśnięte")
    square.style.backgroundColor = "gray";
    drawActive = !drawActive // obsługa flagi - wlączenie true po kliknięciu

    insertDivX = e.offsetX; // offset liczy ilosc pixeli od brzegu obiektu X
    insertDivY = e.offsetY; // offset liczy ilosc pixeli od brzegu obiektu Y
    console.log(insertDivX, insertDivY)
})

square.addEventListener("mousemove", (e) => {
    console.log("ruszanie myszką")
    if (drawActive) { // if z flagą
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        square.style.left = `${divX}px`
        square.style.top = `${divY}px`
    }
})
square.addEventListener("mouseup", () => {
    square.style.backgroundColor = "black"
    drawActive = !drawActive // obsługa flagi po "odkliknięciu"
})