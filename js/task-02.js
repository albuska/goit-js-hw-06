const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

// 1 СПОСІБ
const markup = ingredients.map((ingredient) => 
`<li class="item">${ingredient}</li>`).join(" ");
list.innerHTML = markup;
console.log(markup); 


// 2 СПОСІБ
// const itemEl1 = document.createElement('li');
// itemEl1.textContent = ingredients[0]; 
// itemEl1.classList.add('item'); 
// console.log(itemEl1);

// const itemEl2 = document.createElement('li');
// itemEl2.textContent = ingredients[1]; 
// itemEl2.classList.add('item'); 
// console.log(itemEl2);

// const itemEl3 = document.createElement('li');
// itemEl3.textContent = ingredients[2]; 
// itemEl3.classList.add('item'); 
// console.log(itemEl3);

// const itemEl4 = document.createElement('li');
// itemEl4.textContent = ingredients[3]; 
// itemEl4.classList.add('item'); 
// console.log(itemEl4);

// const itemEl5 = document.createElement('li');
// itemEl5.textContent = ingredients[4]; 
// itemEl5.classList.add('item'); 
// console.log(itemEl5);

// const itemEl6 = document.createElement('li');
// itemEl6.textContent = ingredients[5]; 
// itemEl6.classList.add('item'); 
// console.log(itemEl6);

// list.append(itemEl1. itemEl2, itemEl3, itemEl4, itemEl5, itemEl6);
// console.log(list); 