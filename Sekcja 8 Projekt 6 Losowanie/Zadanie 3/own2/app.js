const btn = document.querySelector("button");

const names = [];

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const div = document.querySelector("div");
    const newName = input.value;
    if (input.value.length) {
        // console.log("dziala")
        for (name of names) {
            if (name === newName) {
                alert("juz jest!!");
                input.value = ""
                return
            }
        }
        names.push(newName);
        div.textContent += `${newName}, `
        input.value = ""
    }


})