const inputRef = document.getElementById('validation-input');

const dataRef = +inputRef.dataset.length;

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === dataRef) {
     inputRef.classList.add('valid');
     inputRef.classList.remove('invalid');
  } else {
     inputRef.classList.add('invalid');
  }
}


// 2 спосіб
// function onInputBlur(event) {
//     if (event.currentTarget.value.length === dataRef) {
//       addClass(); 
//   } else {
//       removeClass(); 
//   }
// }

// function addClass() {
//   inputRef.classList.add('valid');
//   inputRef.classList.remove('invalid');
// }; 

// function removeClass() {
//   inputRef.classList.add('invalid'); 
// }; 


// 3 спосіб
// function onInputBlur(event) {
//   if (event.currentTarget.value.length.toString() === inputRef.dataset.length) {
//     inputChangeClass('valid', 'invalid');
//   } else {
//     inputChangeClass('invalid', 'valid');
//   }
// }
// function inputChangeClass(classOne, classTwo) {
//   inputRef.classList.add(classOne);
//   inputRef.classList.remove(classTwo);
// }
