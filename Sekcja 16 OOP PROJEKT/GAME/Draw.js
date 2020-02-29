class Draw {
    constructor() {
        this.options = ["red", "green", "blue"]; // this.options przechowuje opcje kolorów jakie są do wylosowania
        let _result = this.drawResult(); // let _result przechowuje nam tablice z wynikiem
        this.getDrawResult = () => _result;
    }
    drawResult() {
        let colors = [];
        /// uzupełnianie poprzez losowanie
        for (let i = 0; i < this.options.length; i++) { //  losowanie przy użyciu pętli for
            const index = Math.floor(Math.random() * this.options.length); // określenie indexu poprzez ranodom * ilość wyborów , index porzebny do wyboru z tablicy this.options   
            const color = this.options[index];
            // console.log(color);
            colors.push(color);
        }
        return colors
    }
}
// const draw = new Draw();