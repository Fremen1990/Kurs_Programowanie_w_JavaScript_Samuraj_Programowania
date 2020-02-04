const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    // console.log(index);
    toDoList.splice(index, 1);
    console.log(toDoList);
    taskNumber.textContent = listItems.length;
    renderList()



}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    // console.log(titleTask)

    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Usuń</button>"
    toDoList.push(task);



    ul.appendChild(task);
    input.value = ""; // czyszczenie inputu po dodaniu tasku
    // const listItems = document.querySelectorAll('li.task').length;
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.id = key;
        ul.appendChild(toDoElement);

    })
}

form.addEventListener('submit', addTask)