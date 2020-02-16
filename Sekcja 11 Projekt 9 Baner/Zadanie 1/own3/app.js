const sliders = [{
    img: "images/img1.jpg",
    txt: "Zboże"
}, {
    img: "images/img2.jpg",
    txt: "Krople"
}, {
    img: "images/img3.jpg",
    txt: "Woda"
}]

const slide = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const time = 1000;
let activeOne = 0;

const changeSlide = () => {
    activeOne++
    if (activeOne === sliders.length) {
        activeOne = 0
    }
    slide.src = sliders[activeOne].img;
    h1.textContent = sliders[activeOne].txt;
    changeDots()
}

const changeDots = () => {
    const activeDots = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDots].classList.remove("active");
    dots[activeOne].classList.add("active")
}

setInterval(changeSlide, time)