document.body.addEventListener("click", (e) => {
    console.log(e.clientX, e.clientY)
    const color = getColor(e);
    document.body.style.backgroundColor = color;
})

const getColor = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y)
    if (x % 2 === 0 && x % 2 === 0) {
        return "red";
    } else if (x % 2 != 0 && y % 2 != 0) {
        return "blue";
    } else if (x % 2 != 0 || y % 2 === 0) {
        return "green";
    }
}