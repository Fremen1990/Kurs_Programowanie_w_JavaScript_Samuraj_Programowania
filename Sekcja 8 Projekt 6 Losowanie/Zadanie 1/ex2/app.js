const btn = document.querySelector("button");

const names = ["jaś", "małgosia", "zenek", "halinka"];

const prefixName = ["Wydaje mi się, że ", "Sądzę, że ", "Na pewno "]

btn.addEventListener("click", () => {
    console.log(Math.floor(Math.random() * names.length));
    document.querySelector("div").textContent = `${prefixName[Math.floor(Math.random()*prefixName.length)]} ${names[Math.floor(Math.random() * names.length)]}`
})