const toDoList = [];
const form = document.querySelector("form");
const input = document.querySelector("input");
const tasksNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const tasks = document.getElementsByClassName("task");

const addTask = (e) => {
    e.preventDefault();
    const newTaskName = input.value
    if (newTaskName === "") return
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = newTaskName + "<button> DELETE </button>";
    ul.appendChild(task)
    toDoList.push(task);
    renderList();
    input.value = ""
    tasksNumber.textContent = toDoList.length
    task.querySelector('button').addEventListener('click', removeTask)
}
const removeTask = (e) => {
    console.log("sdgrg")
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    tasksNumber.textContent = toDoList.length
    renderList();
}
const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
}
const searchTask = () => {
    const searchTxt = input.value.toLowerCase();
    let searchToDoList = toDoList;
    searchToDoList = searchToDoList.filter(task => task.textContent.toLowerCase().includes(searchTxt))
    ul.textContent = '';
    searchToDoList.forEach(task => ul.appendChild(task))
    tasksNumber.textContent = searchToDoList.length
}

form.addEventListener("submit", addTask)
input.addEventListener("input", searchTask)