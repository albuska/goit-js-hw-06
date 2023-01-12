const inputRef = document.getElementById("validation-input");

const dataRef = +inputRef.dataset.length; 

inputRef.addEventListener('blur', onInputBlur); 

function onInputBlur(event) {
  if(event.currentTarget.value.length === dataRef) {
    return inputRef.classList.add("valid");
 } else {
   return inputRef.classList.add("invalid");
 }
}

// 2 спосіб "Тернарний оператор"
// function onInputBlur(event) {
// return  event.currentTarget.value.length === dataRef ? 
//         inputRef.classList.add("valid") : 
//         inputRef.classList.add("invalid");
// }


      