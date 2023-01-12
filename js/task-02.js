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
for (const ingredient of ingredients) {
  const itemRef = document.createElement('li'); 
  itemRef.textContent = ingredient; 
  itemRef.classList.add('item');

  list.append(itemRef);
}

console.log(list);


// 2 СПОСІБ
// const markup = ingredients.map((ingredient) => 
// `<li class="item">${ingredient}</li>`).join(" ");
// list.innerHTML = markup;
// console.log(markup); 
