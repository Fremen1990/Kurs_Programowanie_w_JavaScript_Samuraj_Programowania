const sliders = [{
    img: "images/img1.jpg",
    txt: "Zboża"
}, {
    img: "images/img2.jpg",
    txt: "Krople"
}, {
    img: "images/img3.jpg",
    txt: "Woda"
}];

const slide = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const time = 1000;
let activeSlide = 0;

const changeSlide = () => {
    activeSlide++
    if (activeSlide === sliders.length) {
        activeSlide = 0
    }
    slide.src = sliders[activeSlide].img
    h1.textContent = sliders[activeSlide].txt
    changeDots()
}

const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[activeSlide].classList.add("active")
}

setInterval(changeSlide, time)