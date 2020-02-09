const summary = {
    gamesPlayed: "",
    wins: "",
    loses: "",
    draws: ""
}

const game = {
    playerMove: "",
    aIMove: "",
    playerMoveHTML: ""
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    console.log(this.dataset.option);
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 6px yellow"
}


hands.forEach(hand => hand.addEventListener("click", handSelection))