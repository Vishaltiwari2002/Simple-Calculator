document.addEventListener('DOMContentLoaded', function () {
    const resultElement = document.getElementById('result');
    let currentOperand = '';
    let currentOperator = null;
    let previousOperand = '';
  
    function clearCalculator() {
      currentOperand = '';
      currentOperator = null;
      previousOperand = '';
      updateDisplay();
    }
  
    function appendNumber(number) {
      currentOperand = currentOperand.toString() + number.toString();
      updateDisplay();
    }
  
    function chooseOperator(operator) {
      if (currentOperand === '') return;
      if (previousOperand !== '') {
        compute();
      }
      currentOperator = operator;
      previousOperand = currentOperand;
      currentOperand = '';
    }
  
    function compute() {
      let computation;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (currentOperator) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        case '%':
          computation = prev % current;
          break;
        default:
          return;
      }
      currentOperand = computation;
      currentOperator = null;
      previousOperand = '';
      updateDisplay();
    }
  
    function updateDisplay() {
      resultElement.value = currentOperand;
    }
  
    // Event listeners for the buttons
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalButton = document.querySelector('.operator[innerHTML="="]');
    const clearButton = document.querySelector('.operator[innerHTML="C"]');
  
    numberButtons.forEach((button) => {
      button.addEventListener('click', () => {
        appendNumber(button.innerHTML);
      });
    });
  
    operatorButtons.forEach((button) => {
      button.addEventListener('click', () => {
        chooseOperator(button.innerHTML);
      });
    });
  
    equalButton.addEventListener('click', compute);
    clearButton.addEventListener('click', clearCalculator);
  });
  