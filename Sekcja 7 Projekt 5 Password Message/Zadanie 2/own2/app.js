const input = document.querySelector("input");
const div = document.querySelector("div");

const books = ["Wither", "Lord Of The Rings", "Metro 2033"];
const authors = ["Andrzej Sapkowski", "Tolkien", "Dmitry Gluhovsky"];

input.addEventListener("input", (e) => {
    div.textContent = "";
    books.forEach((book, i) => {
        if (book.toUpperCase() === e.target.value.toUpperCase()) {
            div.textContent = authors[i]
            e.target.value = "";
        }
    })
})

input.addEventListener("focus", () => {
    input.classList.add("active")
})

input.addEventListener("blur", () => {
    input.classList.remove("active")
})