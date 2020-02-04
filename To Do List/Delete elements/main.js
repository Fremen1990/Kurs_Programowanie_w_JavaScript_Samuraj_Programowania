const removeTask = (e) => {
    // console.log(e.target.textContent)
    // e.target.remove();
    // console.log(e.target.parentNode);
    // e.target.parentNode.remove();
    e.target.parentNode.style.textDecoration = "line-through"
    e.target.remove();

    const index = e.target.dataset.key;
    // console.log(index)
    // console.log(document.querySelector(`li[data-key="${index}"]`))
    document.querySelector(`li[data-key="${index}"]`).remove();
}

document.querySelectorAll('button').forEach(item => item.addEventListener('click', removeTask))