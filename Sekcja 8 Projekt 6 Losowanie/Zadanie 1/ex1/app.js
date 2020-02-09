const btn = document.querySelector("button");

const names = ["jaś", "małgosia", "zenek", "halinka"];

const prefixName = ["Wydaje mi się, że ", "Sądzę, że ", "Na pewno "]


const nameGenerator = () => {

    // const index = ((Math.floor(Math.random() * names.length)));
    // const indexPrefix = ((Math.floor(Math.random() * prefixName.length)));
    document.querySelector("div").textContent = `${prefixName[Math.floor(Math.random() * prefixName.length)]} ${names[Math.floor(Math.random() * names.length)]} !!`
    console.log(((Math.floor(Math.random() * names.length))))
}


btn.addEventListener("click", nameGenerator)