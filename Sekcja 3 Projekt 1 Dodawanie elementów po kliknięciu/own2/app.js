const btn = document.querySelector("button");
let number = 1;
let activeNumber = 1;
const funk = () => {
    const obiekt = document.createElement("div")
    document.body.appendChild(obiekt);
    obiekt.textContent = number;

    // if (number % 6 == 0) {
    //     obiekt.classList.add("circle")
    //     number = 0;
    // }

    if (activeNumber == 6) {
        obiekt.classList.add("circle")
        activeNumber = 0;
        number = 0;

    }


    number++
    activeNumber++
}


btn.addEventListener("click", funk)