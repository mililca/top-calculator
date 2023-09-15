const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

var num1 = 0;
var num2 = 0;
var operator = "";

const displayValue = document.querySelector('.display');
displayValue.textContent = '';

const operate = function() {
    let initial = displayValue.textContent;
    const arrExp = initial.split(" ");
    num1 = arrExp[0];
    operator = arrExp[1];
    num2 = arrExp[2];
    if (operator == "+") {
        return add(Number(num1), Number(num2))
    } else if (operator == "-") {
        return subtract(Number(num1), Number(num2))
    } else if (operator == "*") {
        return multiply(Number(num1), Number(num2))
    } else if (operator == "/") {
        return divide(Number(num1), Number(num2))
    }
}

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    displayValue.textContent += "1";
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    displayValue.textContent += "2";
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    displayValue.textContent += "3";
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    displayValue.textContent += "4";
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    displayValue.textContent += "5";
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    displayValue.textContent += "6";
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    displayValue.textContent += "7";
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    displayValue.textContent += "8";
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    displayValue.textContent += "9";
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    displayValue.textContent += "0";
});

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    displayValue.textContent += ".";
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    displayValue.textContent += " + ";
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    displayValue.textContent += " - ";
});

const multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', () => {
    displayValue.textContent += " * ";
});

const division = document.querySelector('#divide');
division.addEventListener('click', () => {
    displayValue.textContent += " / ";
});

const result = document.querySelector('#equal');
result.addEventListener('click', () => {
    let result = operate();
    let roundedResult = Math.round(result * 10) / 10;
    displayValue.textContent = roundedResult
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayValue.textContent = "";
    num1 = 0;
    num2 = 0;
    operator = "";
});