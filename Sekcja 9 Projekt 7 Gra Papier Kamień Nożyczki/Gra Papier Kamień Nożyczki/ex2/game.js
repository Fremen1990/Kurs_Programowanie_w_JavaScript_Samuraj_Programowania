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

const hands = [...document.querySelectorAll(".select img")];

function chooseHand() {
    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 6px yellow";
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option
}

function result(player, ai) {
    if (player === ai) {
        return "draw"
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win"
    } else {
        return "loss"
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('.numbers span').textContent = ++gameSummary.games
    if (result === "draw") {
        document.querySelector('[data-summary="who-win"]').textContent = "REMIS ://";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
        document.querySelector('.draws span').textContent = ++gameSummary.draws;
    } else if (result === "win") {
        document.querySelector('[data-summary="who-win"]').textContent = "TY WYGRAŁEŚ!!! ;)";
        document.querySelector('.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "PRZEGRAŁEŚ :(";
        document.querySelector('.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    aiHand = "";
}

function startGame() {
    if (!game.playerHand) return alert("WYBIERZ DŁOŃ!")
    game.aiHand = aiChoice();
    result(game.playerHand, game.aiHand, result);
    const gameResult = result(game.playerHand, game.aiHand)
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}


hands.forEach(hand => hand.addEventListener("click", chooseHand))

document.querySelector(".start").addEventListener("click", startGame)