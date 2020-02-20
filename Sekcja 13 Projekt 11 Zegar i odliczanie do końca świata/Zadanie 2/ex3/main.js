const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

setInterval(() => {
    const startTime = new Date();
    const endTime = new Date("2021-12-31 23:59:00");

    const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - startTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor(endTime / (1000 * 60 * 60) - startTime / (1000 * 60 * 60)) % 24
    let minutes = Math.floor(endTime / (1000 * 60) - startTime / (1000 * 60)) % 60
    let seconds = Math.floor(endTime / (1000) - startTime / (1000)) % 60

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;


    spanD.textContent = `${days}`;
    spanH.textContent = `${hours}`;
    spanM.textContent = `${minutes}`;
    spanS.textContent = `${seconds}`;

})