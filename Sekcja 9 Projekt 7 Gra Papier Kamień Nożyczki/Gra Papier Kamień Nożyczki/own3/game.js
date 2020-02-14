const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

function chooseHand() {
    game.playerHand = this.dataset.option
    console.log(game.playerHand)
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 10px black"
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option
}

function whoWin(player, ai) {
    if (player === ai) {
        return "draw"
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win"
    } else {
        return "loss"
    }
}

function showResults(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player
    document.querySelector('[data-summary="ai-choice"]').textContent = ai
    document.querySelector('.numbers span').textContent = ++gameSummary.games
    if (result === "win") {
        document.querySelector('[data-summary="who-win"]').textContent = "YOU WON!! :)"
        document.querySelector('[data-summary="who-win"]').style.color = "green"
        document.querySelector('.wins span').textContent = ++gameSummary.wins
    } else if (result === "loss") {
        document.querySelector('[data-summary="who-win"]').textContent = "YOU LOOOSE :("
        document.querySelector('[data-summary="who-win"]').style.color = "red"
        document.querySelector('.losses span').textContent = ++gameSummary.losses
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "IT'S A DRAW ://"
        document.querySelector('[data-summary="who-win"]').style.color = "gray"
        document.querySelector('.draws span').textContent = ++gameSummary.draws
    }
}

function endGame() {
    document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = "";
    game.aiHand = "";
    game.playerHand = "";
}

function startGame() {
    if (!game.playerHand) return alert("WYBIERZ DŁOŃ!!")
    game.aiHand = aiChoice();
    console.log(game.aiHand);
    whoWin(game.playerHand, game.aiHand);
    const result = whoWin(game.playerHand, game.aiHand)
    showResults(game.playerHand, game.aiHand, result);
    console.log(result)
    endGame()
}

document.querySelector(".start").addEventListener("click", startGame)

const hands = [...document.querySelectorAll(".select img")];

hands.forEach(hand => hand.addEventListener("click", chooseHand))