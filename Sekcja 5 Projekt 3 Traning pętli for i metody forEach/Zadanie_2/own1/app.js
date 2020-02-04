let size = 3;
let order = -9;

const init = () => {
    const btnCreate = document.createElement("button");
    const btnReset = document.createElement("button");
    document.body.appendChild(btnCreate);
    document.body.appendChild(btnReset);
    btnCreate.textContent = "Create";
    btnReset.textContent = "Reset";
    btnCreate.addEventListener("click", programm);
    btnReset.addEventListener("click", reset);
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    btnCreate.style.fontSize = "25px"
    btnReset.style.fontSize = "25px"
    btnCreate.style.margin = "0 50%"
    btnReset.style.margin = "5% 50%"
}


const programm = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        document.querySelector("ul").appendChild(li);
        li.textContent = `Element numer ${order++}`;
        li.style.fontSize = `${size++}px`
    }

}

const reset = () => {
    document.querySelector("ul").textContent = "";
    order = -9;
    size = 3;

}


init()