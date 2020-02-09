const btn = document.querySelector("button").addEventListener("click", () => {
    chars = "1234567890"
    const section = document.querySelector("section");
    section.textContent = ""
    for (let i = 0; i < 1000; i++) {
        let code = "";
        for (let i = 0; i < 8; i++) {
            code += chars[Math.floor(Math.random() * 10)]
        }
        const div = document.createElement("div");
        section.appendChild(div);
        div.textContent = code;
    }
})