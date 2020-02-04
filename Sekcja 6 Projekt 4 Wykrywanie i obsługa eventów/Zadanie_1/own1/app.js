const init = () => {
    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = "rusz myszką";
    h1.style.textTransform = "uppercase"
    h1.style.fontFamily = "arial";
    h1.style.fontSize = "50px";
    h1.style.position = "fixed";
    h1.style.left = "50%";
    h1.style.top = "50%";
    h1.style.transform = "translate(-50%, -50%)"
}


document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.querySelector("h1").textContent = `${x}, ${y}`

    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${x/y*10})`
})



init()