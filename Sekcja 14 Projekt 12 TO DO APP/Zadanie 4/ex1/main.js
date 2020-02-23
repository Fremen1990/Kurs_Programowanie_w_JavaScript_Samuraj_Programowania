const toDoList = []

const form = document.querySelector('form');
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task"); // metoda pozwalająca na odświeżanie w czasie rzeczywistym
const input = document.querySelector("input");
const addTask = (e) => {
    e.preventDefault() // zblokowanie odświezania strony - przydatne pry przyciskach 
    const titleTask = input.value;
    // console.log(titleTask);
    if (titleTask === "") return // jeśli brak wpisania czegokolwiek, nie dodaje elementu, zwraca returnn
    const task = document.createElement("li"); // tworzy element li pod stałą task
    task.className = "task"; //dodaje klase "task do dodanego elementu const task li
    task.innerHTML = titleTask + "<button>Usuń</button>"; // dodanie buttona zaraz za nazwa tasku tittleTask poprzez metode innerHTML
    toDoList.push(task);
    ul.appendChild(task); // wstawianie li task w ul poprzez metode appendChild
    input.value = ""; // czyszczenie input value zaraz po zatwierdzeniu wpisanego wyrazu
    taskNumber.textContent = listItems.length; // wpisanie liczy zadan do pozycji taskNumber
    task.querySelector("button").addEventListener("click", removeTask) // dodanie nasłuchiwania na button przy tasku 
}
const removeTask = (e) => {
    e.target.parentNode.remove() // metoda event target parentNode remove usuwająca rodzica wraz zdzieckiem  namierzona przez element event
    const index = e.target.parentNode.dataset.key; // definicja indeksu pod usuwanie z tablicy, pod metode Splice
    toDoList.splice(index, 1)
    taskNumber.textContent = listItems.length; // aktualizacja liczby zadań
    renderList();
}
const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
}
form.addEventListener("submit", addTask);