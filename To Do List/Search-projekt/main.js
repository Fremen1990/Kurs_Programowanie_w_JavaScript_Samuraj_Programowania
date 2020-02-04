// //FILTER (I PRZYPOMNIENIE MAP)

// const arr = [24, 123, 1213, 424, 12, 2, 12124, 31];

// const oddNumbers = arr.filter(number => number % 2)
// const evenNumbers = arr.filter(number => !(number % 2))
// const numbersBiggerThan100 = arr.filter(number => (number > 100))


// //MAP
// const double = arr.map(number => number * 2)
// const people = arr.map(number => number + " osób")

// // forEach

// arr.forEach((number, index) => arr[index] = number * 2)

//SEARCH

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    // console.log(e.target.value)
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements] // stworzenie tablicy z elementów li
    // console.log(tasks)
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    console.log(tasks)
    ul.textContent = ""; // oczyszczenie ul po wpisaniu czegokolwiek 
    tasks.forEach(li => ul.appendChild(li))
}


input.addEventListener('input', searchTask)