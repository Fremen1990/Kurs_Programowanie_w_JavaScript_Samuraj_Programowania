const btn = document.querySelector("button");

const names = ["jaś", "małgosia", "zenek", "halinka"];

const prefixName = ["Wydaje mi się, że ", "Sądzę, że ", "Na pewno "]



btn.addEventListener("click", () => {
    const namesIndex = Math.floor(Math.random() * names.length)

    const PrefixNameIndex = Math.floor(Math.random() * prefixName.length)

    document.querySelector("div").textContent = `${prefixName[PrefixNameIndex]} ${names[namesIndex]}`
})