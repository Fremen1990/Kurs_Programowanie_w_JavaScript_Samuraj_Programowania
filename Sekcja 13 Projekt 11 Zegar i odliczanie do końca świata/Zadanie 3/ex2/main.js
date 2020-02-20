const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const timer = document.querySelector("div.time div");

let time = 0;
let active = false;
let intervalID;

const stoperStart = () => {
    if (!active) {
        active = !active
        btnStart.textContent = "Pauza";
        intervalID = setInterval(start, 10);
    } else {
        active = !active
        btnStart.textContent = "Start";
        clearInterval(intervalID)
    }
}

const start = () => {
    time++;
    timer.textContent = (time / 100).toFixed(2)
}

const reset = () => {
    active = false;
    time = 0;
    clearInterval(intervalID);
    timer.textContent = "---"
}

btnStart.addEventListener("click", stoperStart);
btnReset.addEventListener("click", reset);