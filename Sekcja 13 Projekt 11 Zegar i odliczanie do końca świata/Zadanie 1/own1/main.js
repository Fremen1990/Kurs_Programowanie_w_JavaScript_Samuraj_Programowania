const timer = () => {
    const time = new Date();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    document.querySelector(".clock span").textContent = `${hours} : ${minutes} : ${seconds}`
}
setInterval(timer, 1000)