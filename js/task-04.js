const counterValue = {
    value: 0,

    increment() {
        this.value += 1; 
    },

    decrement() {
        this.value -= 1; 
    }
} 

const decrementBtnRef = document.querySelector('[data-action="decrement"]');

const incrementBtnRef = document.querySelector('[data-action="increment"]');

const valueRef = document.getElementById('value');

decrementBtnRef.addEventListener('click', () => {
    counterValue.decrement(); 
    valueRef.textContent = counterValue.value; 
});

incrementBtnRef.addEventListener('click', () => {
    counterValue.increment(); 
    valueRef.textContent = counterValue.value;  
}); 
    
