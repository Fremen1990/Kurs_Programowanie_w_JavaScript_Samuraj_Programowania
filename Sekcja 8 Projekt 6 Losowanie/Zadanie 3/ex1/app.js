const names = [];
const div = document.querySelector("div")

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("TO JUZ JEST!!")
            }
            return
        }
        names.push(newName);
        console.log(names);
        div.textContent += `${newName} , `
        input.value = ""
    }
})