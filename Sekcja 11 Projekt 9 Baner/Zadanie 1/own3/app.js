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

const time = 2000;
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

dots.forEach(dot => dot.addEventListener("click", (e) => {
    console.log(e.target.id)
    const target = e.target.id
    if (target === "one") {
        slide.src = sliders[0].img;
        h1.textContent = sliders[0].txt;
        const activeDots = dots.findIndex(dot => dot.classList.contains("active"));
        dots[activeDots].classList.remove("active");
        dots[0].classList.add("active")
    }
    if (target === "two") {
        slide.src = sliders[1].img;
        h1.textContent = sliders[1].txt;
        const activeDots = dots.findIndex(dot => dot.classList.contains("active"));
        dots[activeDots].classList.remove("active");
        dots[1].classList.add("active")
    }
    if (target === "three") {
        slide.src = sliders[2].img;
        h1.textContent = sliders[2].txt;
        const activeDots = dots.findIndex(dot => dot.classList.contains("active"));
        dots[activeDots].classList.remove("active");
        dots[2].classList.add("active")
    }
}))