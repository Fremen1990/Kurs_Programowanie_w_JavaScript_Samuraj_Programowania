const btn = document.querySelector("button");

const section = document.querySelector("section");

const digits = 10;
const codes = 500;
const chars = "1234567890";

btn.addEventListener("click", () => {
    section.textContent = ""
    for (let i = 0; i < codes; i++) {
        let code = ""
        for (let i = 0; i < digits; i++) {
            code += chars[Math.floor(Math.random() * chars.length)]
        }

        const div = document.createElement("div");
        section.appendChild(div);
        div.textContent = code;
    }

})