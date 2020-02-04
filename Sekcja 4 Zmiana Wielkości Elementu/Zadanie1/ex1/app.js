//STWORZENIE NOWEGO OBIEKTU DIV
const square = document.createElement("div");
document.body.appendChild(square);

//OKREŚLENIE FLAGI
let grow = true;

//OKREŚLENIE ROZMIARU
let size = 10;

// NADANIE ELEMNTOWI HTML STYLE CSS ZE ZMIENNA SIZE
square.style.height = size + "px";
square.style.width = size + "px";

//USTAWIENIE NASŁUCHIWANIA NA SKROLOWANIE
document.addEventListener("scroll", function () {

    //FUNKCJA IF WYKORZYSTUJĄCA FLAGĘ ZWIEKSZAJĄCA ROZMIAR
    if (grow) {
        size += 5;
        square.style.height = size + "px";
        square.style.width = size + "px";

        //FUNKCJA ELSE ZMNIEJSZAJĄCA
    } else {
        size -= 5;
        square.style.height = size + "px";
        square.style.width = size + "px";
    }

    //FUNKCJA IF ORAZ ELSE IF OBSŁUGUJĄCA DZIAŁANIE FLAGI GROW BOOLEAN
    if (size >= window.innerWidth / 2) {
        grow = !grow
    } else if (size < 0) {
        grow = !grow
    }

})