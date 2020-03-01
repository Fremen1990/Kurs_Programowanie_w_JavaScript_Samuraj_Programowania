class Statistics {
    constructor() {
        this.gameResults = [{
            win: true,
            bid: 10
        }, {
            win: false,
            bid: -10
        }];
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResults)
        this.gameResults.push(gameResult)
    }
    showGameStatics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win);
        return [games, wins, losses]
    }
}

const stats = new Statistics