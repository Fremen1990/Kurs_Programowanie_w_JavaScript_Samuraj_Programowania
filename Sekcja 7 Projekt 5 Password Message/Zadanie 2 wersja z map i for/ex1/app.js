const div = document.querySelector("div");
const input = document.querySelector("input");

const fruits = ["ApppLe", "oRANge", "BaNANA"];
const answer = ["działa", "śmiga", "naparza"];

const NewFruits = fruits.map(fruit =>
    fruit.toUpperCase());

input.addEventListener("input", (e) => {
    div.textContent = ""
    for (let i = 0; fruits.length > i; i++) {
        if (e.target.value.toUpperCase() === NewFruits[i]) {
            div.textContent = answer[i]
            e.target.value = ""
        }

    }


})