const input = document.querySelector("input");
const advice = document.querySelector("h1");
const options = ["ciśnij JS!!", "jedziesz go!!", "dawaj JS!!", "koduj jak szalony!!"]

const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnAdvice = document.querySelector(".showAdvice");
const btnOptions = document.querySelector(".showOptions");

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const newOption = input.value;
    if (newOption.length) {
        options.push(newOption);
        console.log(options);
        alert(`Has been added: ${newOption}`);
    } else {
        alert("please add options in input field")
    }
})

btnClean.addEventListener("click", (e) => {
    e.preventDefault();
    options.splice(0, options.length);
    alert("Opcje zostały zresetowane")
})

btnAdvice.addEventListener("click", (e) => {
    e.preventDefault();
    const optionsIndex = Math.floor(Math.random() * options.length);
    advice.textContent = options[optionsIndex];

})
btnOptions.addEventListener("click", (e) => {
    alert(`Twoje opcje to ${options}`)
})