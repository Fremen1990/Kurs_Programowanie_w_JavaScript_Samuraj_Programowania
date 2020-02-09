const btn = document.querySelector("button");

const section = document.querySelector("section")

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const chars = "ABCDEFGHIJK0123456789";

const codesNumber = 1000;

const charsNumber = 10;



const generateCodes = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index]
        }


        const digit = document.createElement("li");
        section.appendChild(digit);
        digit.textContent = code;


    }

}


btn.addEventListener("click", generateCodes)