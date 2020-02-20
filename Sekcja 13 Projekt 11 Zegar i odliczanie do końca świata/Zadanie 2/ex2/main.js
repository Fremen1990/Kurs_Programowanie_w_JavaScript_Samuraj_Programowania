const spanDays = document.querySelector("span.d");
const spanHours = document.querySelector("span.h");
const spanMinutes = document.querySelector("span.m");
const SpanSeconds = document.querySelector("span.s");

setInterval(() => {
        const endDate = new Date("2020-10-31 20:00:00");
        const startDate = new Date();

        const days = Math.floor(endDate / (1000 * 60 * 60 * 24) - startDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((endDate / (1000 * 60 * 60) - startDate / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((endDate / (1000 * 60) - startDate / (1000 * 60)) % 60);
        let seconds = Math.floor((endDate / (1000) - startDate / (1000)) % 60);

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        spanDays.textContent = `${days}`
        spanHours.textContent = `${hours}`
        spanMinutes.textContent = `${minutes}`
        SpanSeconds.textContent = `${seconds}`
    },
    1000)