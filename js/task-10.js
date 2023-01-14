const inputRef = document.querySelector('#controls > input');

const dataCreateRef = document.querySelector('[data-create]');

const dataDestroyRef = document.querySelector('[data-destroy]');

const containerBoxesRef = document.getElementById('boxes'); 

// inputRef.addEventListener('input', (event) => {
// const numberFromInput = +event.currentTarget.value;
// numberFromInput === createBoxes(); 
// });  

dataCreateRef.addEventListener('click', createBoxes); 

dataDestroyRef.addEventListener('click', destroyBoxes); 

function createBoxes(amount) { 

const getNumberOfAmount = 
Number(amount.currentTarget.value = inputRef.value);
  console.log(getNumberOfAmount);  

for(let i = 0; i < getNumberOfAmount; i += 1) {
  let createNewDivs = document.createElement('div'); 
  console.log("🚀 createNewDivs", createNewDivs); 
  
  createNewDivs.style.width = '30px';
  createNewDivs.style.height = '30px';
  createNewDivs.style.backgroundColor = getRandomHexColor(); 

  containerBoxesRef.append(createNewDivs);
}
}

function destroyBoxes() {
containerBoxesRef.remove(); 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
