const containerFef = document.querySelector('.widget');

const paragraphRef = document.querySelector('.color');

const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', getRandomHexColor); 
 
function getRandomHexColor(event) {
  document.body.style.backgroundColor  = 
  `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
  paragraphRef.textContent = document.body.style.backgroundColor; 
}
