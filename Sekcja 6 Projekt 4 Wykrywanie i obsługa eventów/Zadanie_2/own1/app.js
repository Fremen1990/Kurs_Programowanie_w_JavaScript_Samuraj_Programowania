document.body.addEventListener("click", (e) => {
    console.log(e.clientX, e.clientY);
    const color = getColor(e);
    document.body.style.backgroundColor = color;
})

const getColor = (e) => {
    if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
        return "red"
    } else if (e.clientX % 2 != 0 && e.clientY % 2 != 0) {
        return "blue"
    } else if (e.clientX % 2 != 0 || e.clientY % 2 === 0) {
        return "green"
    }
}