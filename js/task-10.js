const inputRef = document.querySelector('#controls > input');

const dataCreateRef = document.querySelector('[data-create]');

const dataDestroyRef = document.querySelector('[data-destroy]');

const containerBoxesRef = document.getElementById('boxes'); 

inputRef.addEventListener('input', handleCreateNumber);  

function handleCreateNumber(event) { 
let getInputNumber = Number(event.currentTarget.value);
getInputNumber = createBoxes();  
}

dataCreateRef.addEventListener('click', createBoxes); 

function createBoxes(amount) { 
  console.log(amount);  
  // const createNewDivs = document.createElement('div'); 
  
  // containerBoxesRef.append(); 
}

dataDestroyRef.addEventListener('click', destroyBoxes); 

function destroyBoxes(event) {
event.currentTarget.reset(); 
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
