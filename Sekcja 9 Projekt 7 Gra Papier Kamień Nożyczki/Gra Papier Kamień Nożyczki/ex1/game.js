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
    return hands[Math.floor(Math.random() * 3)].dataset.option;

}

function checkResult(player, ai) {
    if (player === ai) {
        console.log("remis")
        return "draw"
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        console.log("wygrałeś!!");
        return "win"
    } else {
        console.log("przegrałeś!")
        return "loss"
    }
}
//Publikacja wyniku
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player
    document.querySelector('[data-summary="ai-choice"]').textContent = ai
    document.querySelector(".numbers span").textContent = ++gameSummary.numbers

    if (result === "win") {
        document.querySelector(".wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "TY WYGRAŁEŚ!!! ;)"
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector(".losses span").textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "PRZEGRAŁEŚ :("
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "REMIS ://"
        document.querySelector('[data-summary="who-win"]').style.color = "orange"
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    aiHand = "";
}
// funkcja steruująca
function startGame() {
    if (!game.playerHand) {
        return alert("wybierz dłoń!!!")
    }
    game.aiHand = aiChoice()
    console.log(game.aiHand)
    const gameResult = checkResult(game.playerHand, game.aiHand)
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult)
    endGame()
}

//3333333333333333333333333333333333333333333333333333333333
hands.forEach(hand => hand.addEventListener("click", handSelection)); // dla tablicy "[hands]" przez metode forEach dla każdego elementu hand dodajemy add.EventListenre

document.querySelector(".start").addEventListener("click", startGame)