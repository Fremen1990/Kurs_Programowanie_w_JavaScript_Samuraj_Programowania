const btn = document.querySelector("button");

const liElements = document.querySelectorAll("li");

let size = 10;

// const funk = () => {
//     size++
//     for (let i = 0; i < liElements.length; i++) {
//         if (!liElements[i].style.display) {
//             console.log("display block dany")
//             liElements[i].style.display = "block";
//         }
//         liElements[i].style.fontSize = `${size}px`
//         console.log(size)
//     }
// }

const funk = () => {
    size++
    liElements.forEach((li) => {
        li.style.display = "block"
        li.style.fontSize = `${size}px`
    })

}




btn.addEventListener("click", funk)