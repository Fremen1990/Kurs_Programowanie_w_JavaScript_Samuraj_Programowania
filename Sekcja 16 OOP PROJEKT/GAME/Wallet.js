class Wallet {
    constructor(money) {
        let _money = money;
        //pobieranie aktuwalnej zawartości portfela
        this.getWalletValue = () => _money;
        //Sprawdzanie czy użytkownik ma odpowiednią ilośc środków
        this.checlCanPlay = (value) => {
            if (_money >= value) return true;
            return false
        }
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) { // sprawdzenie czy value type jest liczba i czy nie jest not a number (negacja z true isNAN)
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidłowy typ działania")
                }
            } else {
                console.log(typeof value);
                throw new Error("nieprawidłowa liczba")
            }
        }
    }
}
// const wallet = new Wallet(200)  //obiekt zostanie stworzony w pliku  Game.js który będzie spajał klasy ze wszystkich modułów/plików