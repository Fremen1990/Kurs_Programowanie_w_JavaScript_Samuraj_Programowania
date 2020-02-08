const input = document.querySelector("input");
const divMessage = document.querySelector(".message");

const passwords = ["jabłko", "ziemniak", "cytryna", "arbuz"];
const message = ["owoc", "bulwa", "owoc", "owoc"];

input.addEventListener("input", (e) => {
    divMessage.textContent = ""
    passwords.forEach((password, i) => {
        if (e.target.value === password) {
            divMessage.textContent = message[i]
            e.target.value = ""
        }
    })
})
input.addEventListener("focus", () => {
    input.classList.add("active")
})
input.addEventListener("blur", () => {
    input.classList.remove("active")
})