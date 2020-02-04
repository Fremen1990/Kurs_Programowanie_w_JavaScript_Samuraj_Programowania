const baaaaton = document.querySelector("button");

let number = 1;
let activeNumber = 1;

const addElement = () => {
    const div = document.createElement("div");

    // if (number % 5 == 0) {
    //     div.classList.add("circle")
    // }

    if (activeNumber == 5) {
        activeNumber = 0;
        div.classList.add("circle")
    }

    div.textContent = number;
    number++
    activeNumber++
    document.body.appendChild(div);
}

baaaaton.addEventListener("click", addElement);