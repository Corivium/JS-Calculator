const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

// Create listener for click of target button
keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target; // store the target of the click in a variable
        const action = key.dataset.action; // get the data-action value target
        
        if(!action) {                       // If the key is not an operator key, log in console
            console.log('number key!');
        }
        
        if(                                 // If the key is an operator key, log in console
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ){
            console.log('operator key!');
        } 
        
        if(action === 'decimal'){                                
            console.log('decimal key!');
        }

        if(action === 'clear'){                                
            console.log('clear key!');
        }

        if(action === 'calculate'){                                
            console.log('equal key!');
        }
    } 
});


// Click event listener when a user clicks a number key
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent; // Get content of clicked key
        const displayedNum = display.textContent; // Get content of display

        if(!action) {
            if(displayedNum === '0') {
                display.textContent = keyContent; // Replace 0 value in display with key value
            } else {
                display.textContent = displayedNum + keyContent;  // If display value is not 0, append value to current display value
            }
        }

        if(action === 'decimal') {
            display.textContent = displayedNum + '.'; // Append decimal when decimal key is pressed
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
        }

        // Replace display with clicked number after operator keypress
        const previousKeyType = calculator.dataset.previousKeyType;

        if(!action) {
            if(displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        

        //Release depressed state of clicked operator key
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    }
});





// https://medium.freecodecamp.org/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98