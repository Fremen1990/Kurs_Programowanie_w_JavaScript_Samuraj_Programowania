const bat = document.querySelector("button");

let number = 1;

let act = 1;

const ad = () => {

    const kwadrat = document.createElement("div");


    if (act == 4) {
        number = 4;
        act = 0;
        kwadrat.classList.add("cir");

    }


    kwadrat.textContent = number;
    document.body.appendChild(kwadrat);

    // if (number % 4 == 0) {
    //     kwadrat.classList.add("cir")
    //     number = 0;
    // }
    number++
    act++

}
bat.addEventListener("click", ad)