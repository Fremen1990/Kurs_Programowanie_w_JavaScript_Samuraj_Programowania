// <!-- 
// 1. stworzyć plik index.html i strukturę dokumentu
// 2. stworzyć przycisk w html
// 3. ostylować przycisk i kwadraty, które będę tworzone
// JAVASCRIPT
// 1. pobrać przycisk i podpiąć do niego nasłuchiwanie na click
// 2. zadeklarować funkcję
// 3. w funkcji stworzyć element html (div)
// 4. dodać div do strony
// 5. stworzyć licznik i uzupełnić zawartość elementu div o wartość licznika
// 6. za pomocą instrukcji warunkowej stwierdzić czy dany element jest 5, jeśli tak nadać mu inną klasę 
// -->

const baton = document.querySelector("button");

let number = 1;

let activeN = 1;

const addEl = () => {
    // console.log("kliczek")
    const diverek = document.createElement("div");


    document.body.appendChild(diverek)
    diverek.textContent = number;

    // if (number % 3 == 0) {
    //     number = 0;
    //     diverek.classList.add("circle")
    // }

    if (activeN == 3) {
        number = 0;
        activeN = 0;
        diverek.classList.add("circle")
    }

    activeN++

    number++

}

baton.addEventListener("click", addEl)