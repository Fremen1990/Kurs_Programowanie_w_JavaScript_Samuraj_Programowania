const input = document.querySelector("input");

const liczby = ["jEdEn", "dWa"]
const efekty = ["działa!!!:) ", "super, że działa :)"]

const passwordTyping = (e) => {
    // console.log(e.target.value)
    liczby.forEach((liczba, index) => {
        if (liczba.toUpperCase() === e.target.value.toUpperCase()) {
            document.querySelector("div").textContent = efekty[index]
        }
    })
}
input.addEventListener("focus", () => {
    input.classList.add("active")
})
input.addEventListener("blur", () => {
    input.classList.remove("active")
})
input.addEventListener("input", passwordTyping)