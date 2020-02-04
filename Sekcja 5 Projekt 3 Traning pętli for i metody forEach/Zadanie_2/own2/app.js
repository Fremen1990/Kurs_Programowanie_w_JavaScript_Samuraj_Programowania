let size = 1;
let order = 1;

const init = () => {
    const btnAdd = document.createElement("button");
    document.body.appendChild(btnAdd);
    btnAdd.textContent = "Add";
    btnAdd.style.fontSize = "30px"
    btnAdd.addEventListener("click", app)
    btnAdd.style.margin = "50px 30%"
    const btnReset = document.createElement("button");
    document.body.appendChild(btnReset);
    btnReset.textContent = "Reset";
    btnReset.style.fontSize = "30px"
    btnReset.addEventListener("click", reset)
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
}


const app = () => {

    for (let i = 0; i < 500; i++) {
        const li = document.createElement("li");
        document.querySelector("ul").appendChild(li);
        li.textContent = `Element numer ${order++}`
        li.style.fontSize = `${size++}px`

    }

}


const reset = () => {
    document.querySelector("ul").textContent = "";
    size = 1;
    order = 1;
}

init()