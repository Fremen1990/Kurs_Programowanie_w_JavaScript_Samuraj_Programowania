const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");


const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...li];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText))
    console.log(tasks);
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task))
}


input.addEventListener("input", searchTask)