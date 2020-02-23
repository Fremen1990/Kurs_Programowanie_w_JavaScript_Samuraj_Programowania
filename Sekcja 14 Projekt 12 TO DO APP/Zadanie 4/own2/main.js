const form = document.querySelector("form");
const input = document.querySelector("input");
const taskNumber = document.querySelector("h1 span");
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
    taskNumber.textContent = toDoList.length
    input.value = ""
    li.querySelector("button").addEventListener("click", removeTask)
    renderList()
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = toDoList.length
    renderList()

}


const searchTask = () => {
    const inputText = input.value.toLowerCase();
    let searchList = toDoList;
    searchList = searchList.filter(task => task.textContent.toLowerCase().includes(inputText));
    ul.textContent = ""
    searchList.forEach(searchEl => ul.appendChild(searchEl))

}

const renderList = () => {
    ul.textContent = ""
    toDoList.forEach((toDoEl, key) => {
        toDoEl.dataset.key = key;
        ul.appendChild(toDoEl)
    })
}
form.addEventListener("submit", addTask)
input.addEventListener("input", searchTask)