const btn = document.querySelector("button");

const names = ["jaś", "małgosia", "zenek", "halinka"];

const prefixName = ["Wydaje mi się, że ", "Sądzę, że ", "Na pewno "]

const changeName = function () {
    const div = document.querySelector("div");
    const namesIndex = Math.floor(Math.random() * names.length);
    const prefixNameIndex = Math.floor(Math.random() * prefixName.length);
    div.textContent = `${prefixName[prefixNameIndex]} ${names[namesIndex]}`
}

btn.addEventListener("click", changeName)