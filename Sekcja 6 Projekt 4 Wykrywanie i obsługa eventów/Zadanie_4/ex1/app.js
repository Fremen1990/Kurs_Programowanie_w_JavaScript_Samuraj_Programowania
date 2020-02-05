let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    console.log(e.keyCode, e.which) //key down 40, keyup 38
    //IF

    // if (e.keyCode === 40 && red > 0) {
    //     red--
    //     green--
    //     blue--
    // } else if (e.keyCode === 38 && red < 0) {
    //     red++
    //     green++
    //     blue++
    // }

    //SWITCH

    switch (e.keyCode) {
        case 38:
            console.log("strzalka w gore");
            document.body.style.backgroundColor = `rgb(${red<=255? red++:red}, ${green<=255?green++:green}, ${blue<=255?blue++:blue})`;
            break;
        case 40:
            console.log("strzałka w dół");
            document.body.style.backgroundColor = `rgb(${red>0?red--:red}, ${green>0?green--:green}, ${blue>0?blue--:blue})`;
            break;
    }
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
window.addEventListener("keydown", changeColor);