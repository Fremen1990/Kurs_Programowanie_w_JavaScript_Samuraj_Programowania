const btn = document.querySelector("button");
const section = document.querySelector("section");

const chars = "qwertyuiopasdfghjklzxcvbnm1234567890";

const digitsNumber = 20;
const codesNumber = 1000;

const generateCodes = () => {
    section.textContent = "";
    for (let i = 0; i < codesNumber; i++) {
        code = ""
        for (let i = 0; i < digitsNumber; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length)
            code += chars[randomNumber]
        }
        const div = document.createElement("div");
        section.appendChild(div);
        div.textContent = code.toUpperCase();
    }
}


btn.addEventListener("click", generateCodes)