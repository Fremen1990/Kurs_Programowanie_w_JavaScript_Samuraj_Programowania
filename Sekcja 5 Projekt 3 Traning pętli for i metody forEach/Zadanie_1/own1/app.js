const btn = document.querySelector("button");

const ElementLi = document.querySelectorAll("li");

let size = 10;

// const funky = () => {
//     size++;
//     for (let i = 0; i < ElementLi.length; i++) {

//         if (!ElementLi[i].style.display) {
//             console.log("ile razy block")
//             ElementLi[i].style.display = "block"
//         }
//         ElementLi[i].style.fontSize = `${size}px`
//     }
// }

const funky = () => {
    size++
    ElementLi.forEach((element) => {
        element.style.display = "block";
        element.style.fontSize = `${size}px`
    })

}


btn.addEventListener("click", funky)