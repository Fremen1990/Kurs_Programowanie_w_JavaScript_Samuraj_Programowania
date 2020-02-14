const SpnText = document.querySelector(".text");
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis reprehenderit incidunt facere dignissimos quisquam fuga vero consequuntur dolorem nemo magnam ratione unde et eligendi nihil quam, nulla deleniti. Sapiente, possimus! KONIEC.'
const cursor = document.querySelector(".cursor")

let letterIndex = 0;
const timeForLetter = 500;
const timeForCursor = 600;


const textInterval = () => {
    console.log("ok")
    SpnText.textContent += text[letterIndex]
    letterIndex++
    if (letterIndex === text.length) {
        clearInterval(typing)
    }
}
const typing = setInterval(textInterval, timeForLetter)

function cursorAnimation() {
    cursor.textContent = "|";
    cursor.classList.toggle("active")
}

setInterval(cursorAnimation, timeForCursor)