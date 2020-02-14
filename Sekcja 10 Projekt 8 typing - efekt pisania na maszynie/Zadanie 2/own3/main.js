// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let textIndex = 0;
let signIndex = -15;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    if (signIndex >= 0) {
        spnText.textContent += txt[textIndex][signIndex]
    }
    signIndex++
    if (signIndex === txt[textIndex].length) {
        textIndex++

        if (textIndex === txt.length) return

        return setTimeout(() => {
            signIndex = -15
            spnText.textContent = ""
            addLetter()
        }, 1000)

    }
    setTimeout(addLetter, 100)
}
addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);