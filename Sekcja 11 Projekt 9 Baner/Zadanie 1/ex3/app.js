const slider = [{
        img: "images/img1.jpg",
        txt: "Zboże"
    },
    {
        img: "images/img2.jpg",
        txt: "krople"
    },
    {
        img: "images/img3.jpg",
        txt: "woda"
    }
]

const slide = document.querySelector("img.slider");
const h1 = document.querySelector("h1");
const dot = [...document.querySelectorAll(".dots span")];

const time = 1500;
let active = 0;

const changeDot = () => {
    const activeDot = dot.findIndex(dot => dot.classList.contains("active"))
    console.log(activeDot)
    dot[activeDot].classList.remove("active");
    dot[active].classList.add("active")
}

const changeSlide = () => {
    active++
    if (active === slider.length) {
        active = 0
    }
    slide.src = slider[active].img
    // console.log("2")
    h1.textContent = slider[active].txt
    changeDot()
}

setInterval(changeSlide, time)