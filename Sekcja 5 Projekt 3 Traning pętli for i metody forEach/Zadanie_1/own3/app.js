const bat = document.querySelector("button");

const lista = document.querySelectorAll("li");

let size = 3;

// const fank = () => {
//     size++
//     for (let i = 0; i < lista.length; i++) {
//         if (!lista[i].style.display) {
//             lista[i].style.display = "block"
//             console.log("block ile razy")
//         }
//         lista[i].style.fontSize = `${size}px`
//     }
// }
const fank = () => {
    size += 3
    lista.forEach((element) => {
        if (element.style.display === "") {
            element.style.display = "block"
            console.log("ile bloków")
        }
        element.style.fontSize = `${size}px`
    })

}


bat.addEventListener("click", fank)