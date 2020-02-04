const clock = () => {
    const time = new Date();
    // console.log(time.toLocaleTimeString())

    document.querySelector('.clock span').textContent = time.toLocaleTimeString();
}
setInterval(clock, 1000)