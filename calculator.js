// Get the display element
const display = document.getElementById('display');

// Function to append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Use eval carefully - only for learning purposes
        display.value = eval(display.value);
    } catch (error) {
        // Handle any calculation errors
        display.value = 'Error';
    }
}

// Optional: Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Allow numeric keys, operators, and enter/backspace
    const validKeys = '0123456789.+-*/';
    
    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});