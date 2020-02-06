const input = document.getElementById("pass");

const passwords = ["user", "wiosna", "tomek"];
const message = ["wyjechałam na zawsze ", "piękna pora roku", "to ja"];
const div = document.querySelector("div");

input.addEventListener("input", (e) => {
    // console.log(e.target.value) // wyciaganie wpisanego value
    // if (passwords === e.target.value) { // sprawdzenie czy passwords rowna sie wpisaenmy value
    //     div.textContent = message; // przekazanie komunikatu ze stalej message
    //     e.target.value = ""; // czyszczenie formatki input po wpisaniue poprawnego passwords
    // } else {
    //     div.textContent = ""; // jesli input jest rozny od passwords to kasowanie message
    // }
    div.textContent = "";
    const text = e.target.value;
    console.log(text);
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = message[index];
            e.target.value = ""
        }
    })
})
input.addEventListener("focus", (e) => {
    console.log(e.target);
    e.target.classList.add("active");
})

input.addEventListener("blur", (e) => {
    console.log(e.target);
    e.target.classList.remove("active");
})