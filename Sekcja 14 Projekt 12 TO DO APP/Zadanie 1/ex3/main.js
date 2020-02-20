const removeTask = (e) => {
    // e.target.parentNode.remove();

    // e.target.parentNode.style.textDecoration = "line-through"
    // e.target.remove();

    const index = e.target.dataset.key;
    console.log(index);
    document.querySelector(`[data-key="${index}"]`).remove();
}


document.querySelectorAll("button[data-key]").forEach(item => item.addEventListener("click", removeTask));