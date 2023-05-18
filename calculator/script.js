let calculation = '';

function appendNumber(number) {
  calculation += number;
  updateResult();
}

function appendOperator(operator) {
  calculation += operator;
  updateResult();
}

function clearResult() {
  calculation = '';
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(calculation);
    calculation = result.toString();
    updateResult();
  } catch (error) {
    calculation = '';
    updateResult();
    alert('Invalid calculation');
  }
}

function updateResult() {
  const resultElement = document.getElementById('result');
  resultElement.value = calculation;
}
