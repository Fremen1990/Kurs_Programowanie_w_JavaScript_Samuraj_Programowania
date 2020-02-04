const button = document.querySelector("button");

let number = 1;
let activeNumber = 1;
const addEvent = () => {
    // console.log("klik")

    const object = document.createElement("div")
    document.body.appendChild(object)
    object.textContent = number;

    // if (number % 4 == 0) {
    //     object.classList.add("circle")
    //     number = 0;
    // }

    if (activeNumber == 4) {
        object.classList.add("circle")
        number = 0;
        activeNumber = 0;
    }


    number++;
    activeNumber++
}

button.addEventListener("click", addEvent)