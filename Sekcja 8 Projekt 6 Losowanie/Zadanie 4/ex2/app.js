// <!-- Projekt docelowy:
// https://websamuraj.pl/examples/js/projekt6-zad1/ -->
// <!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz) -->
// <!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
// <!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
// <!-- Przycisk pokaż odpowiedź - losuje z tablicy możliwość -->
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->

const input = document.querySelector("input");
const advice = document.querySelector("h1");
const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnAdvice = document.querySelector(".showAdvice");
const btnOption = document.querySelector(".showOptions");
const options = ["WALCZ GOŚCIU!!", "MOŻW TO PRZEMYŚL CZŁOWIEKU...."];

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const newOption = input.value;
    if (input.value.length) {
        options.push(newOption);
        input.value = "";
        console.log(options)
    }
})

btnClean.addEventListener("click", (e) => {
    e.preventDefault();
    options.splice(0, options.length)
    console.log(options);
})
btnAdvice.addEventListener("click", (e) => {
    e.preventDefault();
    const optionsIndex = Math.floor(Math.random() * options.length);
    advice.textContent = options[optionsIndex];
})
btnOption.addEventListener("click", (e) => {
    e.preventDefault();
    alert(options);

})