const init = () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    document.querySelector("body").style.margin = "5vw"
    document.querySelector("body").style.textAlign = "center"
    div.style.border = "3px solid black"
    div.style.margin = "10vh"
    div.style.fontSize = "50px"
    document.querySelector("label").style.fontSize = "50px"
    input.style.fontSize = "50px"
}



const div = document.querySelector("div")
const input = document.querySelector("input")

const models = ["530i", "Astra", "Passat", "Panda"];
const brands = ["BMW", "Opel", "VW", "FIAT"];

let textValue;

init()

input.addEventListener("input", (e) => {
    const div = document.querySelector("div")
    div.textContent = "";
    textValue = e.target.value;
    models.forEach((model, i) => {
        if (model.toUpperCase() === textValue.toUpperCase()) {
            div.textContent = brands[i];
            e.target.value = "";
        }
    })
})

input.addEventListener("focus", () => {
    input.style.backgroundColor = "black"
    input.style.color = "white"
})

input.addEventListener("blur", () => {
    input.style.backgroundColor = "white"
    input.style.color = "black"
})