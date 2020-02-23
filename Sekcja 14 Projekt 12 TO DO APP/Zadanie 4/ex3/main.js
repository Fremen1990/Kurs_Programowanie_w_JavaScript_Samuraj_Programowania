const form = document.querySelector("form");
const input = document.querySelector("input");
const TaskNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.getElementsByClassName("task");
const toDoList = []

const addTask = (e) => {
    e.preventDefault();
    const typedText = input.value.toLowerCase()
    if (typedText === "") return
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = typedText + "<button>Usuń</button>"
    ul.appendChild(task);
    toDoList.push(task)
    input.value = ""
    TaskNumber.textContent = toDoList.length
    task.querySelector("button").addEventListener("click", removeTask)
    render()
}
const removeTask = (e) => {
    e.target.parentNode.remove()
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    TaskNumber.textContent = toDoList.length
}
const search = () => {
    const searchText = input.value.toLowerCase()
    let tasksFilter = toDoList;
    tasksFilter = tasksFilter.filter(task => task.textContent.toLowerCase().includes(searchText))
    ul.textContent = "";
    tasksFilter.forEach(task => ul.appendChild(task))

}

const render = () => {
    ul.textContent = ""
    toDoList.forEach(task => ul.appendChild(task))

}
form.addEventListener("submit", addTask);
input.addEventListener("input", search)