// 1a

// Pobranie przyciusku do JS, ustawienie naslucjhiwanioa na klikniecie przycisku, zdefiniowanie let number, zdefiniowanie funkcji tworzacej element, dodajacej text content number++ oraz dodajaca div jako ostatnie dziecko document>body

const btn = document.querySelector("button");
let number = 1;

let activeNumber = 1;

const addElement = () => {
    const div = document.createElement("div");
    div.textContent = number;

    // if (number % 5 == 0) {
    //     div.classList.add("circle");
    // }

    if (activeNumber == 5) {
        activeNumber = 0;
        div.classList.add("circle")
    }

    document.body.appendChild(div);
    number++;
    activeNumber++;
}
btn.addEventListener("click", addElement)