const btn = document.querySelector("button");

const section = document.querySelector("section");

const chars = "ABCDEFGHIJK0123456789";

const digits = 30;
const codes = 1000;

btn.addEventListener("click", () => {
    for (let i = 0; i < codes; i++) {
        let code = ""
        for (let i = 0; i < digits; i++) {
            const random = Math.floor(Math.random() * chars.length)
            code += chars[random]


        }
        const div = document.createElement("div");
        section.appendChild(div);
        div.textContent = code;
    }
})