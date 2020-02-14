const spanText = document.querySelector('.text');
const spnText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem voluptatum et ab exercitationem deleniti dolore earum aliquid, aperiam id ratione. Deleniti numquam reiciendis omnis vitae exercitationem, deserunt necessitatibus corrupti temporibus? KONIEC.'
const cursor = document.querySelector(".cursor");

//parameters
let indexText = 0;
const time = 25;

//Programm
const addLetter = () => {
    spanText.textContent += spnText[indexText]
    indexText++
    if (indexText === spnText.length) {
        clearInterval(indexTyping)
    }

}
const indexTyping = setInterval(addLetter, time);

const cursorAnimation = () => {
    cursor.textContent = "|";
    cursor.classList.toggle("active")
}

setInterval(cursorAnimation, 300)