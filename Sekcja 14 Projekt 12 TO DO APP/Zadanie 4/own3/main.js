const toDoList = [];
const form = document.querySelector("form");
const input = document.querySelector("input");
const tasksNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.getElementsByClassName("task");

const addTask = (e) => {
    e.preventDefault();
    const newTaskNameinput = input.value;
    if (newTaskNameinput === "") return
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = newTaskNameinput + "<button> Delete </button>"
    ul.appendChild(task);
    toDoList.push(task);
    renderList()
    input.value = "";
    tasksNumber.textContent = toDoList.length
    task.querySelector("button").addEventListener("click", removeTask)

}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    tasksNumber.textContent = toDoList.length;
    renderList();
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })

}

const search = () => {
    const searchText = input.value.toLowerCase()
    let filterToDoList = toDoList;
    filterToDoList = filterToDoList.filter(toDoElement => toDoElement.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    filterToDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })


}


form.addEventListener("submit", addTask);
input.addEventListener("input", search);