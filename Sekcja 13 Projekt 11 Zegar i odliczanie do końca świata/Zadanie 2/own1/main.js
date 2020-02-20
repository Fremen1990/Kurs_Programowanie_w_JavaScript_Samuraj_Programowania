const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

setInterval(() => {
    const startDate = new Date();
    const endDate = new Date("2365-10-31 20:10:20");

    const days = Math.floor(endDate / (1000 * 60 * 60 * 24) - startDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(endDate / (1000 * 60 * 60) - startDate / (1000 * 60 * 60)) % 60;
    let minutes = Math.floor(endDate / (1000 * 60) - startDate / (1000 * 60)) % 60;
    let seconds = Math.floor(endDate / (1000) - startDate / (1000)) % 60;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    spanD.textContent = `${days}`;
    spanH.textContent = `${hours}`;
    spanM.textContent = `${seconds}`;
    spanS.textContent = `${seconds}`;
})