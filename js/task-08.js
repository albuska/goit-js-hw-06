const formRef = document.querySelector('.login-form'); 
const inputsRef = document.querySelectorAll('input');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault(); 
if(inputsRef[0].value === "" || inputsRef[1].value === "") {
    alert('Всі поля повинні бути заповнені'); 
}
const formRef = event.currentTarget.elements; 
const valuesForm = {
    mail: formRef.email.value,
    password: formRef. password.value,
}
console.log(valuesForm); 
event.currentTarget.reset();
}


// 2 варіант
// function onFormSubmit(event) {
//     event.preventDefault(); 
//     if(inputsRef[0].value === "" || inputsRef[1].value === "") {
//         alert('Всі поля повинні бути заповнені'); 
//     }
//     const formData = new FormData(event.currentTarget); 
//     formData.forEach((value, name) => {
//         console.log(value); 
//         console.log(name); 
//     })
//     event.currentTarget.reset();   
//     }