const input = document.querySelector("input");

const div = document.querySelector("div");

const passwords = ["jurek", "ewa", "ada"];

const message = ["tata", "mama", "siora"]


input.addEventListener("input", (e) => {
    // console.log(e.target.value);
    const textValue = e.target.value;
    div.textContent = ""
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