const btnStart = document.querySelector("button.main");
const btnReset = document.querySelector("button.reset");
const timer = document.querySelector("div.time div");

let time = 0;
let flag = false;
let intervalId;

const startTimer = () => {
    if (!flag) {
        flag = !flag;
        btnStart.textContent = "Pauza";
        intervalId = setInterval(start, 10);
    } else {
        flag = !flag;
        btnStart.textContent = "Start";
        clearInterval(intervalId);
    }

}
const start = () => {
    time++;
    timer.textContent = (time / 100).toFixed(2)
    console.log(time)
}
const reset = () => {
    flag = false;
    timer.textContent = "---";
    clearInterval(intervalId)
    time = 0;
}

btnStart.addEventListener("click", startTimer);
btnReset.addEventListener("click", reset)