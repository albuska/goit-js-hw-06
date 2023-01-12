const inputRef = document.getElementById('name-input');

const titleRef = document.getElementById('name-output');

inputRef.addEventListener('input', (event) => {
    titleRef.textContent = event.currentTarget.value;
}); 

