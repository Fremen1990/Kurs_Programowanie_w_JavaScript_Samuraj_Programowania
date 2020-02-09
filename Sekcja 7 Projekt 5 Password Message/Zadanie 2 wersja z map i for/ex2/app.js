const input = document.querySelector("input");
const div = document.querySelector("div");

const tablica = ["Ja", "tY", "oN", "mY", "wY", "OnI"];
const ans = ["działa", "map", "for", "supor", "haha", "w koncu"];

const nowaTablica = tablica.map(tab => tab.toUpperCase())
const newAns = ans.map(a => a.toUpperCase());

input.addEventListener("input", (e) => {
    // console.log(e.target.value)
    div.textContent = ""
    for (let i = 0; i < nowaTablica.length; i++) {
        if (e.target.value.toUpperCase() === nowaTablica[i]) {
            div.textContent = newAns[i]
            // e.target.value = ""
        }
    }
})

o