// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector("button.main");
const btnReset = document.querySelector("button.reset");
const timer = document.querySelector("div.time div")

let time = 0;
let active = false;
let idInterval;

const stoperStart = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza"
        idInterval = setInterval(start, 10);

    } else {
        active = !active;
        btnStart.textContent = "Start"
        clearInterval(idInterval)
    }
}
const start = () => {
    time++
    timer.textContent = (time / 100).toFixed(2)
}

const stoperReset = () => {
    time = 0
    timer.textContent = "---"
    active = false;
    btnStart.textContent = "Start"
    clearInterval(idInterval)
}

btnStart.addEventListener("click", stoperStart);
btnReset.addEventListener("click", stoperReset);