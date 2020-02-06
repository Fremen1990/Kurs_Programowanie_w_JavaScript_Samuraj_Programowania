const input = document.querySelector("input");
const div = document.querySelector("div");

const passwords = ["asia", "ada", "tomek", "jurek"]
const message = ["dziewczyna", "siora", "ja", "tata"]

input.addEventListener("input", (e) => {
    div.textContent = ""
    console.log(e.target.value);
    const textValue = e.target.value;
    passwords.forEach((password, index) => {
        if (password === textValue) {
            div.textContent = message[index]
            input.textContent = ""
            e.target.value = ""
        }
    })
})
input.addEventListener("focus", (e) => {
    e.target.classList.add("active")
})
input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
})