let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    currentInput += char;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        alert('Invalid calculation');
    }
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}
