let operator = undefined;
let a = undefined;
let b = undefined;
let result = undefined;
let numsArray = [];
let numDisplay = 0; // text content displayed
const display = document.querySelector("#display");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
clear.addEventListener('click', clearCalc);
const buttonsMain = document.querySelector("#buttonsMain");
const numBtn = buttonsMain.querySelectorAll(".numBtn");
numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', populateDisplay);
});

function populateDisplay() {
    if (a === undefined) {
        // then push the pressed number keys into the A Array
        numsArray.push(this.value);
        numDisplay = numsArray.join("");
        display.textContent = numDisplay;
        console.log(getFuncName());
    }
    else if (b === undefined) {
        numsArray.push(this.value);
        numDisplay = numsArray.join("");
        display.textContent = numDisplay;
        console.log(getFuncName());
    }
}

const operatorBtn = buttonsMain.querySelectorAll(".operatorBtn");
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', function () {
        if (a !== undefined) {
            clickEquals();
            console.log(getFuncName());
        }
        else {
            operator = this.value;
            a = parseInt(numDisplay);
            numsArray = [];
            console.log(getFuncName());
        };
    });
});

function operate(operator, a, b) {
    if (operator === 'add') {
        add(a, b);
        console.log(getFuncName());
    }
    else if (operator === 'subtract') {
        subtract(a, b);
        console.log(getFuncName());
    }
    else if (operator === 'multiply') {
        multiply(a, b);
        console.log(getFuncName());
    }
    else if (operator === 'divide') {
        divide(a, b);
        console.log(getFuncName());
    }
    else {
        console.log('whoops - i\m getting curious');
        console.log(getFuncName());
    }
}

function add(a, b) {
    result = a + b;
    console.log(result);
    console.log(getFuncName());
    return result;
}
function subtract(a, b) {
    result = a - b;
    console.log(result);
    console.log(getFuncName());
    return result;
}
function multiply(a, b) {
    result = a * b;
    console.log(result);
    console.log(getFuncName());
    return result;
}
function divide(a, b) {
    result = a / b;
    console.log(result);
    console.log(getFuncName());
    return result;
}

const equalsBtn = document.querySelector("#equalsBtn");
equalsBtn.addEventListener('click', clickEquals);

function clickEquals() {
    b = parseInt(numDisplay);
    operate(operator, a, b);
    a = result;
    display.textContent = a;
    b = undefined;
    console.log(getFuncName());
}

function clearCalc() {
    operator = undefined;
    a = undefined;
    b = undefined;
    result = undefined;
    numsArray = [];
    numDisplay = 0;
    display.textContent = 0;
    console.log(getFuncName());
}

function getFuncName() {
    console.log(`================ ${getFuncName.caller.name} ==================`);
    logVars();
}

function logVars() {
    console.log(`=== CURRENT VALUES:`);
    console.log(`Operator: ${operator}`);
    console.log(`A: ${a}, B: ${b}`);
    console.log(`NumsArray: ${numsArray}`);
    console.log(`NumDisplay: ${numDisplay}`);
}

function test() {
    console.log('test worked');
}

