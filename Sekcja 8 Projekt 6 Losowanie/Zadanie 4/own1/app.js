const options = ["naparzaj to !! ", "ciśnij gościu!! "];

const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnAdvice = document.querySelector(".showAdvice");
const btnOptions = document.querySelector(".showOptions");

btnAdd.addEventListener("click", () => {
    event.preventDefault();
    const input = document.querySelector("input");
    const newOption = input.value;
    if (input.value.length) {
        options.push(newOption);
        input.value = "";
        console.log(options);
        alert(`Dodałeś ${newOption}`);
    }
})

btnClean.addEventListener("click", () => {
    event.preventDefault();
    options.splice(0, options.length);
    console.log(options);
    alert(`Tablica została wyczyszczona`)
})

btnAdvice.addEventListener("click", () => {
    event.preventDefault();
    const optionIndex = Math.floor(Math.random() * options.length);

    if (options.length) {
        document.querySelector("h1").textContent = options[optionIndex];
    } else {
        alert("nie ma rady")
    }

})

btnOptions.addEventListener("click", () => {
    event.preventDefault();
    alert(`Your options are: ${options}`)
})