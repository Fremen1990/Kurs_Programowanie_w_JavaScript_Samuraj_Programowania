// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let activeObject = 0;
let activeSign = 0;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    spnText.textContent += txt[activeObject][activeSign]
    activeSign++
    if (activeSign === txt[activeObject].length) {
        activeObject++
        if (activeObject === txt.length) return

        return setTimeout(() => {
            activeSign = 0
            spnText.textContent = ""
            addLetter()
        }, 2000)

    }
    setTimeout(addLetter, 200)
}
addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);