const listWithId = document.querySelector('#categories');
// console.log("🚀 listWithId", listWithId);

const menuItemsByClass = document.querySelectorAll('.item');
// console.log("🚀 menuItemsByClass", menuItemsByClass);
console.log('Number of categories:', menuItemsByClass.length); 

const listsEl = document.querySelectorAll('.item-list');

 menuItemsByClass.forEach(element => {
 console.log('Category:', element.firstElementChild.textContent);
 console.log('Elements:', element.querySelectorAll('li').length);
 }) 

// 2 ВАРІАНТ
// const menuItemsByClass  = document.querySelector('#categories');
// const categories = [...menuItemsByClass.children];
// console.log('Number of categories:', categories.length);


// categories.forEach(category => {
//     console.log('Category:', category.firstElementChild.textContent);
//     console.log('Elements:', category.lastElementChild.childElementCount);
// })

  


   


