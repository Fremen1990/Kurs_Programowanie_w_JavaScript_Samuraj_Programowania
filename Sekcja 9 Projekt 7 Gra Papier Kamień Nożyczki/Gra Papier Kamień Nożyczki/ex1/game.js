//11111111111111111111111111111111111111111111111
const gameSummary = { //obiekty z danymi {} - zawsze oddzielone przecinkiem, nie średnikiem
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
const game = {
    playerHand: "",
    aiHand: "",
    playerHandHTML: ""
}

//222222222222222222222222222222222222222222222222222
const hands = [...document.querySelectorAll('.select img')]; // [...   ] nawias kwadratowy i trzykropek przed rozbija NodeList na rablice Array 

//44444444444444444444444444444444444444444444444444444
//Pierwsza funkcja
function handSelection() {
    console.log(this)
    game.playerHand = this.dataset.option; // przypisanie do obiekty game.playerHand danych z kilknięcia przez metode "this" oraz wycuagniecie danych metodą "dataset.option"
    console.log(game.playerHand)
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 6px yellow" // nadanie żółtej obramówki do miejsca kliknięcia "this"
}

function aiChoice() {
    return hands[Math.floor(Math * random() * 3)].dataset.option;

}

// funkcja steruująca
function startGame() {
    if (!game.playerHand) {
        return alert("wybierz dłoń!!!")
    }
    game.aiHand = computerChoice()
}

//3333333333333333333333333333333333333333333333333333333333
hands.forEach(hand => hand.addEventListener("click", handSelection)); // dla tablicy "[hands]" przez metode forEach dla każdego elementu hand dodajemy add.EventListenre

document.querySelector(".start").addEventListener("click", startGame)