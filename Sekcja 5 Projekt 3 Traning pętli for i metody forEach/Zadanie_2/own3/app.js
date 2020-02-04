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


let order = 1;
let size = 5;

const init = () => {
    const btnAdd = document.createElement("button");
    document.body.appendChild(btnAdd);
    btnAdd.textContent = "Add Elements"
    btnAdd.style.fontSize = "25px";
    btnAdd.style.margin = "5% 50%";
    btnAdd.addEventListener("click", app);
    btnAdd.style.position = "fixed";
    btnAdd.style.top = "5%";
    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    const btnReset = document.createElement("button");
    document.body.appendChild(btnReset);
    btnReset.textContent = "Add Elements"
    btnReset.style.position = "fixed";
    btnReset.style.top = "15%";
    btnReset.style.margin = "5% 50%";
    btnReset.style.fontSize = "25px";
    btnReset.addEventListener("click", reset);
}

const app = () => {
    // console.log("klikc dziala")
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        document.querySelector("ul").appendChild(li);
        li.textContent = `Element nr ${order++}`
        li.style.fontSize = `${size++}px`;
    }
}

const reset = () => {
    document.querySelector("ul").textContent = ""
    size = 5;
    order = 1;
}

init()