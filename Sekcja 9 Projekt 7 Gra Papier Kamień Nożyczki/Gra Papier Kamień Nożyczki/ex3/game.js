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

const hands = [...document.querySelectorAll(".select img")]

function playerChoice() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 10px yellow"
    console.log(this.dataset.option)
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option
}

function checkResult(player, ai) {
    if (player === ai) {
        return "draw"
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win"
    } else return "loss"

}

function PublishResults(player, ai, wynik) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector(".numbers span").textContent = ++gameSummary.games
    if (wynik === "win") {
        document.querySelector('[data-summary="who-win"]').textContent = "YOU WIN!! :)";
        document.querySelector('[data-summary="who-win"]').style.color = "green"
        document.querySelector(".wins span").textContent = ++gameSummary.wins
    } else if (wynik === "loss") {
        document.querySelector('[data-summary="who-win"]').textContent = "YOU LOOOSE!! ";
        document.querySelector('[data-summary="who-win"]').style.color = "red"
        document.querySelector(".losses span").textContent = ++gameSummary.wins
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "DRARDW";
        document.querySelector('[data-summary="who-win"]').style.color = "gray"
        document.querySelector(".draws span").textContent = ++gameSummary.draws
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}

function startGame() {
    if (!game.playerHand) return alert("WYBIERZ DŁOŃ!")
    game.aiHand = aiChoice();
    const gameResults = checkResult(game.playerHand, game.aiHand)
    console.log(gameResults)
    PublishResults(game.playerHand, game.aiHand, gameResults)
    endGame()
}

document.querySelector(".start").addEventListener("click", startGame);

hands.forEach(hand => hand.addEventListener("click", playerChoice))