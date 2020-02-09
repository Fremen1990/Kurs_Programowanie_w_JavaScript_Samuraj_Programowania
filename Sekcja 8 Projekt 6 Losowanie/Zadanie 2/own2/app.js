const btn = document.querySelector("button");
const section = document.querySelector("section");

const digits = "QWERTYUIOP1234567890"
const digitsNumber = 20;
const codesNumber = 1000;

btn.addEventListener("click", () => {
    section.textContent = ""

    for (let i = 0; i < codesNumber; i++) {
        code = ""
        for (let i = 0; i < digitsNumber; i++) {
            const randomDigit = Math.floor(Math.random() * digits.length)
            code += digits[randomDigit]
        }
        const div = document.createElement("div");
        section.appendChild(div);
        div.textContent = code
    }
})