const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const timer = document.querySelector(".time div");

let time = 0;
let flag = false;
let intervalID;

const startTimer = () => {
    if (!flag) {
        flag = !flag;
        btnStart.textContent = "Pauza";
        intervalID = setInterval(start, 10);

    } else {
        flag = !flag;
        btnStart.textContent = "Start";
        clearInterval(intervalID);
    }

}

const start = () => {
    time++;
    timer.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    timer.textContent = "---";
    flag = false;
    clearInterval(intervalID);
}

btnStart.addEventListener("click", startTimer);
btnReset.addEventListener("click", reset);