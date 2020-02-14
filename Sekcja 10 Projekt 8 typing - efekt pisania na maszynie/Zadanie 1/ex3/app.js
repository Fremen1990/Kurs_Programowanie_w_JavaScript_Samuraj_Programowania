const textPanel = document.querySelector(".text");
const textToBeType = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis vel impedit! Totam harum sit est aliquid et minima repudiandae, laborum, consectetur omnis voluptas, veniam quibusdam esse debitis excepturi necessitatibus.'
const cursor = document.querySelector(".cursor")

const typingTime = 50;
let textIndex = 0;
let cursorTime = 200;

const textTyping = () => {
    textPanel.textContent += textToBeType[textIndex]
    textIndex++
    if (textIndex === textToBeType.length) {
        clearInterval(typingInterval)
    }
}

const cursorAnimation = () => {
    cursor.classList.toggle("active")
}

const typingInterval = setInterval(textTyping, typingTime)

setInterval(cursorAnimation, cursorTime)