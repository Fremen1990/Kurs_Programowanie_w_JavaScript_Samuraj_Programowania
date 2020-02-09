const btn = document.querySelector("button");

const names = ["jaś", "małgosia", "zenek", "halinka"];

const prefixName = ["Wydaje mi się, że ", "Sądzę, że ", "Na pewno "]

const changeName = () => {
    const div = document.querySelector("div");

    div.textContent = `${prefixName[Math.floor(Math.random()*prefixName.length)]} ${names[Math.floor(Math.random())*names.length]}`
}


btn.addEventListener("click", changeName)