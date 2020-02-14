const textPanel = document.querySelector(".text");

const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur temporibus cum illum mollitia in sequi sapiente iste eum, at voluptatem consequuntur dolores vero odio labore. Architecto deserunt sint neque atque."

const cursor = document.querySelector(".cursor");

const letterTime = 5;
let letterIndex = 0;

const typing = () => {
    textPanel.textContent += text[letterIndex]
    letterIndex++
    if (letterIndex === text.length) {
        clearInterval(typingInterval)
    }
}

const typingInterval = setInterval(typing, letterTime)

const cursorAnimation = () => {
    cursor.classList.toggle("active")
}

setInterval(cursorAnimation, 200)