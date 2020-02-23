const form = document.querySelector("form");
const input = document.querySelector("input");
const TaskNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const tasks = document.getElementsByClassName("task");
toDoList = []

const addTask = (e) => {
    e.preventDefault();
    let textInput = input.value.toLowerCase();
    if (textInput === "") return
    const li = document.createElement("li");
    li.innerHTML = textInput + "<button> Usuń </button>"
    ul.appendChild(li);
    li.className = "task"
    toDoList.push(li);
    TaskNumber.textContent = toDoList.length
    input.value = ""
    li.querySelector("button").addEventListener("click", removeTask)
    renderList()
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    TaskNumber.textContent = toDoList.length
    renderList()

}

const search = () => {
    const searchTxt = input.value.toLowerCase();
    let toDoListFilter = toDoList;
    toDoListFilter = toDoListFilter.filter(li => li.textContent.toLowerCase().includes(searchTxt))
    ul.textContent = "";
    toDoListFilter.forEach(toDo => ul.appendChild(toDo))

}

const renderList = () => {
    ul.textContent = ""
    toDoList.forEach((toDoEl, key) => {
        toDoEl.id = key;
        ul.appendChild(toDoEl)
    })
}

form.addEventListener("submit", addTask);
input.addEventListener("input", search)