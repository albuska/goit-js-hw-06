const inputRef = document.querySelector('#controls > input');

const dataCreateRef = document.querySelector('[data-create]');

const dataDestroyRef = document.querySelector('[data-destroy]');

const containerBoxesRef = document.getElementById('boxes');

dataCreateRef.addEventListener('click', createBoxes);

dataDestroyRef.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const getNumberOfAmount = Number((amount.currentTarget.value = inputRef.value));
  const boxDivs = [];
  let containerSizes = 20;

  for (let i = 0; i < getNumberOfAmount; i += 1) {
    const createNewDivs = document.createElement('div');

    containerSizes += 10;
    createNewDivs.classList.add('new-box');
    createNewDivs.style.width = containerSizes + 'px';
    createNewDivs.style.height = containerSizes + 'px';

    createNewDivs.style.backgroundColor = getRandomHexColor();

    boxDivs.push(createNewDivs); 
  }
  containerBoxesRef.append(...boxDivs);
}

function destroyBoxes() {
  const boxMainDivs = document.querySelectorAll('.new-box');
  for (const div of boxMainDivs) {
   containerBoxesRef.removeChild(div);
  }
  inputRef.value = ''; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
