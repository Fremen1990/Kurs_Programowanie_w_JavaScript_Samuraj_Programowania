const clock = () => {
    let time = 0;
    document.body.textContent = 0 + " sekund"

    const timer = () => {
        document.body.textContent = time++ + " sekund"
    }
    return timer

}

const start = clock()

setInterval(start, 1000)