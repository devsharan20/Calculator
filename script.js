class Calculator {
    constructor() {
        this.display = document.getElementById('calc-display');
        this.clear();
    }

    // Clears the display
    clear() {
        this.currentInput = '';
        this.display.value = '0';
    }

    // Deletes the last character
    backspace() {
        this.currentInput = this.currentInput.slice(0, -1);
        this.display.value = this.currentInput || '0';
    }

    // Appends a number or operator to the input
    appendInput(value) {
        if (this.display.value === '0' && !isNaN(value)) {
            this.currentInput = value;
        } else {
            this.currentInput += value;
        }
        this.display.value = this.currentInput;
    }

    // Calculates and displays the result
    calculate() {
        try {
            this.currentInput = eval(this.currentInput);  // Dangerous in production
            this.display.value = this.currentInput;
        } catch (error) {
            this.display.value = 'Error';
        }
    }
}

// Initialize the calculator
const calculator = new Calculator();

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (value === 'C') {
            calculator.clear();
        } else if (value === '=') {
            calculator.calculate();
        } else if (value === '⌫') {
            calculator.backspace();
        } else {
            calculator.appendInput(value);
        }
    });
});
