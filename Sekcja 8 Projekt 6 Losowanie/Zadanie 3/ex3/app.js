const btn = document.querySelector("button");
const names = [];

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.querySelector("input");
    const newName = input.value;
    if (newName.length) {
        for (name of names) {
            if (name === newName) {
                alert("takie juz jest@!!!")
            }
            return
        }
        console.log(newName)
        names.push(newName)
        document.querySelector("div").textContent += `${newName}, `;
        input.value = ""

    }
})