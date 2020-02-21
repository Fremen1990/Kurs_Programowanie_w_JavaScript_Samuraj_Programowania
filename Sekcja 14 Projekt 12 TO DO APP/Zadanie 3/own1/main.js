const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const searchTask = (e) => {
    let tasks = [...li];
    const inputText = e.target.value.toLowerCase();
    // console.log(inputText)
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(inputText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task))
}

input.addEventListener("input", searchTask)