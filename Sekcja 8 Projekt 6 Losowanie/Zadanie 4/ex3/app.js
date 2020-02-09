const input = document.querySelector("input");
const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnAdvice = document.querySelector(".showAdvice");
const btnOptions = document.querySelector(".showOptions");
const options = ["walcza", "albo moze nie walcz.."]

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const newOption = input.value;
    options.push(newOption);
    console.log(options);
    alert(`dodana została opcja ${newOption}`)
    input.value = "";
})

btnClean.addEventListener("click", (e) => {
    e.preventDefault();
    options.splice(0, options.length);
    console.log(options);
    alert(`Tablica została wyczyszczona ${options}`)
})

btnAdvice.addEventListener("click", (e) => {
    e.preventDefault();
    const optionsIndex = Math.floor(Math.random() * options.length);
    if (options) {
        document.querySelector("h1").textContent = options[optionsIndex];
    } else
        alert("Ddodaj proszę jakąś opcje, brak rad w bazie.")


})

btnOptions.addEventListener("click", (e) => {
    e.preventDefault();
    alert(`Twoje opcje to ${options}`);
})