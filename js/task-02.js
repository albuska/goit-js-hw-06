const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

let itemsBox = []; 

for (const ingredient of ingredients) {
 const itemRef = document.createElement('li'); 
  itemRef.textContent = ingredient; 
  itemRef.classList.add('item');
  
  itemsBox.push(itemRef); 
  
}
list.append(...itemsBox);
console.log(list);


// 2 СПОСІБ
// const markup = ingredients.map((ingredient) => 
// `<li class="item">${ingredient}</li>`).join(" ");
// list.innerHTML = markup;
// console.log(markup); 
