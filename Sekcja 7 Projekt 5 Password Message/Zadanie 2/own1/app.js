const input = document.querySelector("input");
const div = document.querySelector("div");

const ofiary = ["żAba", "mysZ", "króLik"];
const drapieżnik = ["bOCIan", "wĄż", "lEw"]
let textValue


const matchAnimals = (e) => {
    div.textContent = ""
    textValue = e.target.value;
    ofiary.forEach((ofiara, i) => {
        if (ofiara.toUpperCase() === textValue.toUpperCase()) {
            div.textContent = drapieżnik[i].toUpperCase();
            e.target.value = "";
        }
    })
}

input.addEventListener("input", matchAnimals)