/* VARIABLE DECLERATION */

const input = document.querySelector('#input-box');

const clear = document.querySelector('#clear');
const squared = document.querySelector('#squared');
const exponent = document.querySelector('#exponent');
const squareRoot = document.querySelector('#squareRoot');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('#divide');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const multiply = document.querySelector('#multiply');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const subtract = document.querySelector('#subtract');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');
const addition = document.querySelector('#addition');

// 0 MEANS ON, 1 means OFF
let stateStatus = 0;


/* EVENT HANDLERS */

//input.addEventListener('click', clearInput);

clear.addEventListener('click', clearInput);
squared.addEventListener('click', squareIt);
exponent.addEventListener('click', inputExponent);
squareRoot.addEventListener('click', inputSquareRoot);
seven.addEventListener('click', inputSeven);
eight.addEventListener('click', inputEight);
nine.addEventListener('click', inputNine);
divide.addEventListener('click', inputDivide);
four.addEventListener('click', inputFour);
five.addEventListener('click', inputFive);
six.addEventListener('click', inputSix);
multiply.addEventListener('click', inputMultiply);
one.addEventListener('click', inputOne);
two.addEventListener('click', inputTwo);
three.addEventListener('click', inputThree);
subtract.addEventListener('click', inputSubtract);
zero.addEventListener('click', inputZero);
decimal.addEventListener('click', inputDecimal);
equals.addEventListener('click', inputEquals);
addition.addEventListener('click', inputAddition);



/* FUNCTIONS */

function clearInput() {
    input.innerHTML = '';
}

function inputSquareRoot() {
    input.innerHTML = `${input.innerHTML}√`;
}

function inputExponent() {
    //Add exponent sign to input-box
    input.innerHTML = `${input.innerHTML} ^ `;
}

function inputRightParanthesis() {
    //Add right paranthesis to input-box
    input.innerHTML = `${input.innerHTML})`;
}

function inputSeven() {
    //Add 7 to input-box
    input.innerHTML = `${input.innerHTML}7`;
}

function inputEight() {
    //Add 8 to input-box
    input.innerHTML = `${input.innerHTML}8`;
}

function inputNine() {
    //Add 9 to input-box
    input.innerHTML = `${input.innerHTML}9`;
}

function inputDivide() {
    //Add division sign to input-box
    input.innerHTML = `${input.innerHTML} / `;
}

function inputFour() {
    //Add 5 to input-box
    input.innerHTML = `${input.innerHTML}4`;
}

function inputFive() {
    //Add 5 to input-box
    input.innerHTML = `${input.innerHTML}5`;
}

function inputSix() {
    //Add 6 to input-box
    input.innerHTML = `${input.innerHTML}6`;
}

function inputMultiply() {
    //Add multiply sign to input-box
    input.innerHTML = `${input.innerHTML} * `;
}

function inputOne() {
    //Add 1 to input-box
    input.innerHTML = `${input.innerHTML}1`;
}

function inputTwo() {
    //Add 2 to input-box
    input.innerHTML = `${input.innerHTML}2`;
}

function inputThree() {
    //Add 3 to input-box
    input.innerHTML = `${input.innerHTML}3`;
}

function inputSubtract() {
    //Add minus sign to input-box
    input.innerHTML = `${input.innerHTML} - `;
}

function inputZero() {
    //Add 0 to input-box
    input.innerHTML = `${input.innerHTML}0`;
}

function inputDecimal() {
    //Add decimal to input-box
    input.innerHTML = `${input.innerHTML}.`;
}

function inputAddition() {
    //Add addittion sign to input-box
    input.innerHTML = `${input.innerHTML} + `;
}



//Executes the math statement in the input-box
function inputEquals() {
    //Excecutes the math in the input-box and returns the result into the input-box (9 characters max)
    let result;

    //Multiply by 1 to convert these (strings) into integers
    let num1 = input.innerHTML.split(' ')[0] * 1;
    let operation = input.innerHTML.split(' ')[1];
    let num2 = input.innerHTML.split(' ')[2] * 1;

    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        result = num1 / num2;
    } else if (operation === '^') {
        result = num1 ** num2; // Exponent operator = **
        console.log(result);
    } else if (input.innerHTML.startsWith('√')) {
        result = Math.sqrt(input.innerHTML[1]);
    }

    input.innerHTML = result
}

function squareIt() {
    input.innerHTML = input.innerHTML * input.innerHTML;
}