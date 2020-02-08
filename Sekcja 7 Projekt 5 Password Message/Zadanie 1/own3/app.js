const input = document.querySelector("input");
const div = document.querySelector("div");

const owoce = ["jabłko", "wiśnia", "banan"];
const kolory = ["czerwone", "wiśniowe", "żółte"];

input.addEventListener("input", (e) => {
    console.log(e.target.value)
    div.textContent = "";
    owoce.forEach((owoc, i) => {
        if (owoc === e.target.value) {
            div.textContent = kolory[i]
            e.target.value = "";
        }
    })
})