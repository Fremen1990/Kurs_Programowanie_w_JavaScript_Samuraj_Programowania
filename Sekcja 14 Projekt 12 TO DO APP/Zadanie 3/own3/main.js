const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const searchTask = (e) => {
    let tasks = [...li];
    const inputTxt = e.target.value.toLowerCase();
    console.log(inputTxt)
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(inputTxt));
    ul.textContent = ""
    tasks.forEach(task => ul.appendChild(task))
}


input.addEventListener("input", searchTask)