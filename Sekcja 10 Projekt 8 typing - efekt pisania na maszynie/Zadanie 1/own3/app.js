const textPanel = document.querySelector(".text");
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellat deserunt consectetur dicta iste ut assumenda maxime illum aperiam debitis deleniti asperiores modi id, totam doloremque explicabo recusandae sit aliquam.'
const cursor = document.querySelector(".cursor");

let letterIndex = 0;
const letterTime = 400;
const cursorTime = 300;


const typing = () => {
    textPanel.textContent += text[letterIndex];
    letterIndex++
    if (letterIndex === text.length) {
        clearInterval(textInterval)
    }
}

const textInterval = setInterval(typing, letterTime)

const cursorAnimation = () => {
    cursor.classList.toggle("active")
}

setInterval(cursorAnimation, cursorTime)