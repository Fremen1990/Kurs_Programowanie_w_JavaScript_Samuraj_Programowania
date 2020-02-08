const input = document.querySelector("input");
const names = ["jeRZy", "eWa", "aDA"];
const relation = ["taTa", "mAmA", "sIOra"]

input.addEventListener("input", (e) => {
    document.querySelector("div").textContent = ""

    names.forEach((name, i) => {
        if (name.toUpperCase() === e.target.value.toUpperCase()) {
            document.querySelector("div").textContent = relation[i].toUpperCase();
            e.target.value = ""
        }
    })
})
input.addEventListener("focus", () => {
    input.classList.add("active");
})

input.addEventListener("blur", () => {
    input.classList.remove("active")
})