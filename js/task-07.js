const inputRef = document.getElementById('font-size-control');

const spanRef = document.getElementById('text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
spanRef.style.fontSize = `${event.currentTarget.value}px`;
}

