document.addEventListener("mousemove", (e) => {
    document.querySelector("h1").textContent = `${e.clientX}, ${e.clientY}`
    document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${e.clientX/e.clientY*20})`
})