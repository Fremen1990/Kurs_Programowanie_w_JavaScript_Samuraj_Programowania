const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const timer = document.querySelector(".time div");

time = 0;
active = false;
let intervalID;

const startTimer = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";
        intervalID = setInterval(start, 10);
    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(intervalID);
    }
}

const start = () => {
    time++;
    timer.textContent = (time / 100).toFixed(2)
}

const reset = () => {
    time = 0;
    clearInterval(intervalID);
    active = false;
    timer.textContent = "---";
}

btnStart.addEventListener("click", startTimer);
btnReset.addEventListener("click", reset);