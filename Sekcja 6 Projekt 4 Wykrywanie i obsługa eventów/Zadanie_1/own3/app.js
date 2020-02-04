const h1 = document.querySelector("h1");

const rainbow = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y)
    h1.textContent = `Mouse position ${x}, ${y}`
    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${x/y*20})`
}

document.addEventListener("mousemove", rainbow)