const btn = document.querySelector("button");

let size = 15;

const liElements = document.querySelectorAll("li");

// const pokaZwieksz = () => {
//     size++
//     for (i = 0; i < liElements.length; i++) {

//         if (!liElements[i].style.display) {
//             liElements[i].style.display = "block";

//             console.log("display block")
//         }
//         liElements[i].style.fontSize = `${size}px`
//         console.log(size)
//     }
// }

const pokaZwieksz = () => {
    size++
    liElements.forEach((element) => {

        element.style.display = "block"
        element.style.fontSize = `${size}px`

    })
}




btn.addEventListener("click", pokaZwieksz)