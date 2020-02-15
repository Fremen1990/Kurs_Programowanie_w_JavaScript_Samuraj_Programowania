const slides = [{
        img: 'images/img1.jpg',
        txt: 'Zboże'
    },
    {
        img: 'images/img2.jpg',
        txt: 'krople'
    },
    {
        img: 'images/img3.jpg',
        txt: 'woda'
    }
]
const sliders = document.querySelector("img.slider");
const text = document.querySelector("h1")
const dots = [...document.querySelectorAll('.dots span')]

let activeSlide = 0;

const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    console.log(activeDot)
    dots[activeDot].classList.remove('active');
    dots[activeSlide].classList.add('active')
}
const changeSlide = () => {
    activeSlide++
    if (activeSlide === slides.length) {
        activeSlide = 0
    }
    sliders.src = slides[activeSlide].img
    text.textContent = slides[activeSlide].txt
    changeDots()
}
setInterval(changeSlide, 1500)