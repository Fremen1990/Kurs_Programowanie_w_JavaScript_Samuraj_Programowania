const form = document.querySelector("form");
const input = document.querySelector("input");
const taskNumber = document.querySelector("h1 span");
const liItems = document.getElementsByClassName("task")
const ul = document.querySelector("ul");
const toDoList = [];
const inputSearch = document.querySelector("input.wyszukaj")

const addTask = (e) => {
    e.preventDefault();
    // console.log("FZIALA")
    const taskTitle = input.value
    // console.log(taskTitle)
    if (taskTitle === "") return;
    const task = document.createElement("li");
    task.className = "task";
    ul.appendChild(task)
    task.innerHTML = taskTitle + "<button>Usuń</button>"
    input.value = ""
    toDoList.push(task)
    taskNumber.textContent = toDoList.length;
    task.querySelector("button").addEventListener("click", removeTask);
    renderList()
}
const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = liItems.length;
    renderList();

}
const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.id = key
        ul.appendChild(toDoElement)
    })
}
const searchTask = (e) => {
    let inputTxt = e.target.value.toLowerCase();
    let tasks = toDoList
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(inputTxt))
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task))
}

form.addEventListener("submit", addTask);
input.addEventListener("input", searchTask)