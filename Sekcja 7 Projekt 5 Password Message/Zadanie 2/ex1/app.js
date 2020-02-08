const input = document.querySelector("input");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!!"];
const div = document.querySelector("div")

const showMessage = (e) => {
    div.textContent = ""
    console.log(e.target.value)
    let textValue = e.target.value

    passwords.forEach((password, i) => {
        if (password.toLowerCase() === textValue.toLowerCase()) {
            div.textContent = messages[i]
            e.target.value = ""
        }
    })
}
input.addEventListener("input", showMessage)

input.addEventListener("focus", (e) => {
    input.classList.add("active")
})

input.addEventListener("blur", (e) => {
    input.classList.remove("active")
})