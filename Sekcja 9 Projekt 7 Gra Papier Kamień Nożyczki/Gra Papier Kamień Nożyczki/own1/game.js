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

function chooseHand() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand)
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 10px yellow"
}

function aiMove() {
    return hands[Math.floor(Math.random() * 3)].dataset.option
}

function checkResult(player, ai) {
    if (player === ai) {
        return "draw"
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win"
    } else {
        return "lose"
    }
}

function PublichResult(player, ai, results) {
    document.querySelector('[data-summary="your-choice"]').textContent = player
    document.querySelector('[data-summary="ai-choice"]').textContent = ai
    document.querySelector(".numbers span").textContent = ++gameSummary.games

    if (results === "win") {
        document.querySelector('[data-summary="who-win"]').textContent = "YOU WIN!! :)"
        document.querySelector('[data-summary="who-win"]').style.color = "green"
        document.querySelector(".wins span").textContent = ++gameSummary.wins
    } else if (results === "lose") {
        document.querySelector('[data-summary="who-win"]').textContent = "YOU LOOOSE!! :("
        document.querySelector('[data-summary="who-win"]').style.color = "red"
        document.querySelector(".losses span").textContent = ++gameSummary.losses
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "DRAW :|"
        document.querySelector('[data-summary="who-win"]').style.color = "gray"
        document.querySelector(".draws span").textContent = ++gameSummary.draws
    }
}

function endGame() {
    document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = "";
    game.playerHand = ""
    game.aiHand = ""
}



function startGame() {
    game.aiHand = aiMove()
    checkResult(game.playerHand, game.aiHand)
    // console.log(checkResult)
    const gameResults = checkResult(game.playerHand, game.aiHand)
    console.log(gameResults)
    PublichResult(game.playerHand, game.aiHand, gameResults);
    endGame()
}

document.querySelector(".start").addEventListener("click", startGame)

hands.forEach(hand => hand.addEventListener("click", chooseHand))