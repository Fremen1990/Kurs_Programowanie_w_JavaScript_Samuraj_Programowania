const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dignissimos sapiente unde excepturi libero sint optio soluta? Recusandae, veniam rem quia porro obcaecati nulla natus dignissimos repudiandae veritatis, aut maxime.'

const textPanel = document.querySelector(".text")
const cursor = document.querySelector(".cursor")

let textIndex = 0;

const textTyping = () => {
    textPanel.textContent += text[textIndex];
    textIndex++
    if (textIndex === text.length) {
        clearInterval(typingInterval)
    }
}

function cursorAnimation() {
    cursor.classList.toggle("active")
}

const typingInterval = setInterval(textTyping, 5)
setInterval(cursorAnimation, 200)