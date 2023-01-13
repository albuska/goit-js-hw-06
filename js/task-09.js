const paragraphRef = document.querySelector('.color');

const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', getRandomHexColor); 
 
function getRandomHexColor() {
  document.body.style.backgroundColor  = 
  `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
  paragraphRef.textContent = document.body.style.backgroundColor; 
}

// 2 варіант
// const color = document.querySelector('.color');
// const btnChangeColor = document.querySelector('.change-color');

// btnChangeColor.addEventListener('click', onChangeColorBtn);

// function onChangeColorBtn() {
//   document.body.style.backgroundColor = color.textContent = getRandomHexColor();
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }