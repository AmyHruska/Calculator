// business logic
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}


// user interface logic 
const number1 = parseInt(prompt("Please enter a number:"));
const number2 = parseInt(prompt("Please enter another number:"));

const addResult = add(number1, number2);

const subtractResult = subtract(number1, number2);

const multiplyResult = multiply(number1, number2);

const divideResult = divide(number1, number2);

window.alert(number1 + " + " + number2 + " = " + addResult + ", " + number1 + " - " + number2 + " = " + subtractResult + ", "  + number1 + " * " + number2 + " = " + multiplyResult + ", "  + number1 + " / " + number2 + " = " + divideResult + "." );