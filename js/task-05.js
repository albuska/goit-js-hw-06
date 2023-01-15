const inputRef = document.getElementById('name-input');

const titleRef = document.getElementById('name-output');

inputRef.addEventListener('input', (event) => {
   
if(inputRef.textContent = event.currentTarget.value) {
    titleRef.textContent = event.currentTarget.value;
    
 } else {
    titleRef.textContent = 'Anonymous'; 
}
}); 

