const clock = () => {
    let seconds = 0;
    document.body.textContent = `0 seconds`;

    const timer = () => {
        document.body.textContent = `${seconds++} sekund`
    }
    return timer
}
const start = clock()

setInterval(start, 1000)