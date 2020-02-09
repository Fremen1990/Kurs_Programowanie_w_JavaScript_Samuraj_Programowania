const input = document.querySelector("input");
const advice = document.querySelector("h1");
const options = ["ciśnij JS!!", "jedziesz go!!", "dawaj JS!!", "koduj jak szalony!!"]

const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnAdvice = document.querySelector(".showAdvice");
const btnOptions = document.querySelector(".showOptions");

btnOptions.addEventListener("click", (e) => {
    e.preventDefault()
    alert(`Twoje opcje to: ${options}`)
})

btnAdvice.addEventListener("click", (e) => {
    e.preventDefault()
    const optionRandom = Math.floor(Math.random() * options.length);
    advice.textContent = options[optionRandom];
})

btnClean.addEventListener("click", (e) => {
    e.preventDefault()
    options.splice(0, options.length);
})

btnAdd.addEventListener("click", (e) => {
    e.preventDefault()
    newOption = input.value;
    options.push(newOption);
    input.value = "";
})