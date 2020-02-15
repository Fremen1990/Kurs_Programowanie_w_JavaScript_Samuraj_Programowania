const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
]
const image = document.querySelector("img.slider");
const txt = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll('.dots span')];
//Interfejs
const time = 1000;
let active = 0;

//Implementacja

const changeDot = () => {
    // console.log("change dot")
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active')
}
const changeSlide = () => {
    active++
    if (active > slideList.length - 1) {
        active = 0
    }
    // console.log(active)
    image.src = slideList[active].img
    txt.textContent = slideList[active].text
    changeDot()
}
setInterval(changeSlide, time)