// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let activeWord = 0;
let activeLetter = -10;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    if (activeLetter >= 0) {
        spnText.textContent += txt[activeWord][activeLetter];
    }
    activeLetter++

    if (activeLetter === txt[activeWord].length) {
        activeWord++
        if (activeWord === txt.length) return

        return setTimeout(() => {
            activeLetter = -10
            spnText.textContent = ""
            addLetter();
        }, 500)
    }
    setTimeout(addLetter, 100)
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);