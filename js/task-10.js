const inputRef = document.querySelector('#controls > input');

const dataCreateRef = document.querySelector('[data-create]');

const dataDestroyRef = document.querySelector('[data-destroy]');

const containerBoxesRef = document.getElementById('boxes'); 


dataCreateRef.addEventListener('click', createBoxes); 

dataDestroyRef.addEventListener('click', destroyBoxes); 

function createBoxes(amount) { 

const getNumberOfAmount = 
Number(amount.currentTarget.value = inputRef.value);

for(let i = 0; i < getNumberOfAmount; i += 1) {
  let createNewDivs = document.createElement('div');
  console.log("🚀 createNewDivs", createNewDivs);
console.log(i); 

 createNewDivs.style.width = '30px';
//  createNewDivs.style.width += '10px'; 
 createNewDivs.style.height = '30px';
//  createNewDivs.style.height += '10px';

//  createNewDivs.firstElementChild.style.width = '30px';
//  createNewDivs.firstElementChild.style.height = '30px'; 

//  createNewDivs[0].style.width = '30px';
//  createNewDivs[0].style.height = '30px'; 
  
//  createNewDivs.lastElementChild.style.width = '50px';
//  createNewDivs.lastElementChild.style.height = '50px';

// createNewDivs[i].style.width += '10px';
//  createNewDivs[i].style.height += '10px';

  createNewDivs.style.backgroundColor = getRandomHexColor(); 

  containerBoxesRef.append(createNewDivs);
}
}

function destroyBoxes() {
containerBoxesRef.remove(); 
inputRef.value = ''; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
