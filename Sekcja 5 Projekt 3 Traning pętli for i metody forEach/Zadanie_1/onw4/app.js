// <!-- Projekt 3 - PĘTLA - PLIK STARTOWY ZADANIE 1 -->
// <!-- Gotowy projekt możesz zobacz tutaj https://websamuraj.pl/examples/js/projekt3-zad1/ -->

// <!-- 
// Lista jest już stworzona w strukturze html, ale domyślnie niewidoczna (display: none). 
// - Po kliknięciu na przycisk (button już jest) mamy sprawić by każdy element li był widoczny (ustawienie własciwości display na block)
// - by po każdym kliknięciu w button wielkość fonta była o jeden większa od początkowego (ustaw w JS wartość początkową na 10px, użyj zmiennej).

// Nie zmieniaj nic w html i css. Mozesz zmieniać tylko plik JavaScript.

// Zrób to zadanie (najpierw) za pomocą pętli i (potem) za pomocą metody forEach.

// -->

const btn = document.querySelector("button");

const liElements = document.querySelectorAll("li");

let size = 10;

// btn.addEventListener("click", () => {
//     size++;

//     for (let i = 0; i < liElements.length; i++) {
//         if (liElements[i].style.display === "") {
//             liElements[i].style.display = "block"
//             console.log("displa block how many times")
//         }
//         liElements[i].style.fontSize = `${size}px`
//     }
// })

btn.addEventListener("click", () => {
    size++
    liElements.forEach((element) => {
        element.style.display = "block";
        element.style.fontSize = `${size}px`
    })
})