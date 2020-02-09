const btn = document.querySelector("button");
const div = document.querySelector("div");
const input = document.querySelector("input")

names = [];
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === input.value) {
                alert("taki juz jest!!")
            }
            return
        }
        names.push(newName);
        div.textContent += `${newName}, `
        input.value = ""
    }
})