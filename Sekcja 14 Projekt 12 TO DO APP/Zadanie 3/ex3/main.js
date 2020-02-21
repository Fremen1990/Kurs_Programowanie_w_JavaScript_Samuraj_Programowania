const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const search = (e) => {
    // console.log(e.target.value.toLowerCase());
    const inputText = e.target.value.toLowerCase();
    let tasks = [...li];
    // console.log(tasks)
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(inputText));
    // console.log(tasks.filter(task => task.textContent.toLowerCase().includes(inputText)))
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task))
}


input.addEventListener("input", search)