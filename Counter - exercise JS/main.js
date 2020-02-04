const nowTime = new Date().getTime(); // funkcja new Date z data bieżącą plus przelciznie metodą .getTime() na liczbę milisekunkd od 01 stycznia 1970roku

const endDate = new Date('2020-10-31 24:00:00').getTime(); // założony endDate przeliczony metodą getTime() na milisekundy liczbowe

const spanD = document.querySelector('span.d') // zaciągnięte obiektyz HTML medotą document.querySelecor do wpisani w nie textContent poczlonej licznby
const spanH = document.querySelector('span.h')
const spanM = document.querySelector('span.m')
const spanS = document.querySelector('span.s')


setInterval(() => { //funkcja setInterval która oblicza nowTime do kalkulacji czasi pozostałego i odświeża obliczenia 
    const nowTime = new Date().getTime();

    const days = Math.floor(endDate / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24))


    let hours = Math.floor(endDate / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24

    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor(endDate / (1000 * 60) - nowTime / (1000 * 60)) % 60

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor(endDate / (1000) - nowTime / (1000)) % 60

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    //wpisanie obliczonej funkcji w span
    spanD.textContent = days
    spanH.textContent = hours
    spanM.textContent = minutes
    spanS.textContent = seconds

}, 1000)