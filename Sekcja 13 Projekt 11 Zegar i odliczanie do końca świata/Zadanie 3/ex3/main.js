const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const timer = document.querySelector("div.time div");

let time = 0;
let active = false;
let intervalID;


const startStoper = () => {
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

const resetStoper = () => {
    active = false;
    time = 0;
    timer.textContent = "---";
    clearInterval(intervalID)
}


btnStart.addEventListener("click", startStoper);
btnReset.addEventListener("click", resetStoper);