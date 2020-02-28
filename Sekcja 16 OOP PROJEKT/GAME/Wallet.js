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

        }


    }
}

const wallet = new Wallet(200)