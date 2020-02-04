const h1 = document.querySelector("h1");

document.addEventListener("mousemove", function (e) {

    console.log(e.clientX, e.clientY)

    h1.textContent = `${e.clientX}, ${e.clientY}`

    document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${e.clientX/e.clientY*20})`
})