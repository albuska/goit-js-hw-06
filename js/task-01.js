const listWithId = document.querySelector('#categories');
// console.log("🚀 listWithId", listWithId);

const menuItemsByClass = document.querySelectorAll('.item');
// console.log("🚀 menuItemsByClass", menuItemsByClass);
console.log('Number of categories:', menuItemsByClass.length); 

const listsEl = document.querySelectorAll('.item-list');

const firstTitle = menuItemsByClass [0].firstElementChild;
console.log('Category:', firstTitle.textContent); 
console.log('Elements:', listsEl[0].children.length);


const secondTitle = menuItemsByClass [1].firstElementChild;
console.log('Category:', secondTitle.textContent); 
console.log('Elements:', listsEl[1].children.length);

const thirdTitle = menuItemsByClass [2].firstElementChild;
console.log('Category:', thirdTitle.textContent); 
console.log('Elements:', listsEl[2].children.length);


// 2 ВАРІАНТ
// const menuItemsByClass  = document.querySelectorAll('.item');

//  menuItemsByClass.forEach(element => {
//  console.log('Category:', element.firstElementChild.textContent);
//  console.log('Elements:', element.querySelectorAll('li').length);
//  }) 

// 3 ВАРІАНТ
// const menuItemsByClass  = document.querySelector('#categories');
// const categories = [...menuItemsByClass.children];
// console.log('Number of categories:', categories.length);


// categories.forEach(category => {
//     console.log('Category:', category.firstElementChild.textContent);
//     console.log('Elements:', category.lastElementChild.childElementCount);
// })

  


   


