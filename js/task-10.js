const inputRef = document.querySelector('#controls > input');

const dataCreateRef = document.querySelector('[data-create]');

const dataDestroyRef = document.querySelector('[data-destroy]');

const containerBoxesRef = document.getElementById('boxes');

dataCreateRef.addEventListener('click', createBoxes);

dataDestroyRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const getNumberOfAmount = Number((amount.currentTarget.value = inputRef.value));

  let containerSizes = 20;

  for (let i = 0; i < getNumberOfAmount; i += 1) {
    let createNewDivs = document.createElement('div');
    console.log('🚀 createNewDivs', createNewDivs);
    console.log(i);
    containerSizes += 10;

    createNewDivs.style.width = containerSizes + 'px';
    createNewDivs.style.height = containerSizes + 'px';

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
