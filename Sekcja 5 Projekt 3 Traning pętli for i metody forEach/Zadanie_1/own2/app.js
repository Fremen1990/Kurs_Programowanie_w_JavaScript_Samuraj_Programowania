const btn = document.querySelector("button");

const liElementy = document.querySelectorAll("li");

let size = 5;

// const funk = () => {
//     size++
//     for (let i = 0; i < liElementy.length; i++) {
//         if (!liElementy[i].style.display)
//             console.log("ile blockow")
//         liElementy[i].style.display = "block";
//         liElementy[i].style.fontSize = `${size}px`
//     }
// }



const funk = () => {
    size++
    liElementy.forEach((li) => {
        li.style.display = "block";
        li.style.fontSize = `${size}px`

        console.log(size)
    })
}
btn.addEventListener("click", funk)