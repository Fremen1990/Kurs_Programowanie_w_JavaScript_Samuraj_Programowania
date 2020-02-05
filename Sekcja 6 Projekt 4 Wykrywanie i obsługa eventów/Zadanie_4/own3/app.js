let red = 50;
let green = 50;
let blue = 50;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

const changeColor = (e) => {
    console.log(e.keyCode)
    //keyDown 40
    // keyUp 38
    // if (e.keyCode === 38) {
    //     document.body.style.backgroundColor = `rgb(${red<256?red++:red},${green<256?green++:green},${blue<256?blue++:blue})`
    // } else if (e.keyCode === 40) {
    //     document.body.style.backgroundColor = `rgb(${red>0?red--:red},${green>0?green--:green},${blue>0?blue--:blue})`
    // }

    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red<256?red++:red},${green<256?green++:green},${blue<256?blue++:blue})`
            break
        case 40:
            document.body.style.backgroundColor = `rgb(${red>0?red--:red},${green>0?green--:green},${blue>0?blue--:blue})`
            break
    }

}

window.addEventListener("keydown", changeColor)