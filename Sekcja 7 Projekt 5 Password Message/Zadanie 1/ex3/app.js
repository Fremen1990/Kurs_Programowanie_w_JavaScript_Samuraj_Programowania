const input = document.querySelector("input");

const div = document.querySelector("div");

const passwords = ["ada", "tomek", "ewa", "jurek", "asia"];
const message = ["siora", "ja", "mama", "tata", "moja"];

input.addEventListener("input", (e) => {
    div.textContent = "";
    console.log(e.target.value)
    const textValue = e.target.value;

    passwords.forEach((password, i) => {
        if (password === textValue) {
            div.textContent = message[i]
            e.target.value = ""
        }
    })
})

input.addEventListener("focus", (e) => {
    e.target.classList.add("active")
})

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active")
})