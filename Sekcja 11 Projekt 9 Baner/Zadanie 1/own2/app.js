const sliders = [{
    img: "images/img1.jpg",
    txt: "Zboże"
}, {
    img: "images/img2.jpg",
    txt: "Krople"
}, {
    img: "images/img3.jpg",
    txt: "Woda"
}, ]

const slide = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const time = 1000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === sliders.length) {
        active = 0
    }
    slide.src = sliders[active].img;
    h1.textContent = sliders[active].txt;
    changeDots()
}
const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"))
    console.log(activeDot)
    dots[activeDot].classList.remove("active")
    dots[active].classList.add("active")
}

setInterval(changeSlide, time)