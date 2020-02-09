const names = [];
const btn = document.querySelector("button");
const input = document.querySelector("input");
const div = document.querySelector("div");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("Takie imię już jest w bazie")
                input.value = "";
                return
            }
        }
        names.push(newName);
        div.textContent += `${newName}, `
        input.value = "";
    }
})