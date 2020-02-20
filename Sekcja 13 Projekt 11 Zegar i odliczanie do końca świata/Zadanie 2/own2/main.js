const spanekDays = document.querySelector("span.d");
const spanekHours = document.querySelector("span.h");
const spanekMinutes = document.querySelector("span.m");
const spanekSeconds = document.querySelector("span.s");

setInterval(() => {
    const startTime = new Date();
    const endTime = new Date("2020-04-15 20:00:00");

    const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - startTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(endTime / (1000 * 60 * 60) - startTime / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(endTime / (1000 * 60) - startTime / (1000 * 60)) % 60;
    let seconds = Math.floor(endTime / (1000) - startTime / (1000)) % 60;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    spanekDays.textContent = `${days}`;
    spanekHours.textContent = `${hours}`;
    spanekMinutes.textContent = `${minutes}`;
    spanekSeconds.textContent = `${seconds}`;
})