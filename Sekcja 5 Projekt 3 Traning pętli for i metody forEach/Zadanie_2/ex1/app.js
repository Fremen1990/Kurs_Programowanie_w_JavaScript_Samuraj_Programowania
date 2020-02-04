// <!-- Projekt 3 - Zadanie 2 -
// https://websamuraj.pl/examples/js/projekt3-zad2/

// - Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę w main.js Nie dodawaj nic więcej do zakresu globalnego.

// - funkcja init, która będzie uruchomiona po wczytaniu strony. Jej zadaniem jest:
// --- stworzyć dwa elementy
// <button>Dodaj 10 elementów listy</buttn>
// <ul></ul>
// --- dodaj je do body
// --- ustaw nasłuchiwanie na przycisk


// --- funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init. Jej zadanie to:
// --- tworzenie 10 elementów li i umieszczanie ich w elemencie ul
// --- kazdy z 10 elementów ma mieć swój indeks (order) pczy czym kolejne 10 elementów ma być konynuacją (czilu pierwszy klik mamy 1-10, kolejny 11-20 itd)
// --- każdy kolejny element il ma mieć font-size większy o 1px.

// - bez zmian w pliku html (nie dodajemy html-a i css-a). Cały kod piszemy w elemencie main.js

// -->

let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const btnClean = document.createElement("button");
    document.body.appendChild(btn);
    document.body.appendChild(btnClean);
    btn.textContent = "Dodaj 10 elementów listy";
    btnClean.textContent = "Clean";
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements)
    btnClean.addEventListener("click", cleanList)
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const ul = document.querySelector("ul");
        document.body.appendChild(ul)
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`
    }
}

const cleanList = () => {
    document.querySelector("ul").textContent = "";
    size = 10
    orderElement = 1

}
init()