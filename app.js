let operator = undefined;
let a = null;
let b = null;
let result = null;
let numsArray = [];
let numDisplay = 0; // text content displayed
const display = document.querySelector("#display");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
clear.addEventListener('click', clearCalc);
const buttonsMain = document.querySelector("#buttonsMain");
const button = buttonsMain.querySelectorAll("button");
const numBtn = buttonsMain.querySelectorAll(".numBtn");
numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', populateDisplay);
});

function populateDisplay() {
    numsArray.push(this.value);
    numDisplay = numsArray.join("");
    display.textContent = numDisplay;
    console.log(getFuncName());
    if (a === null) {
    }
    else {
        b = parseInt(numDisplay);
        console.log(getFuncName());
    }
}

const operatorBtn = buttonsMain.querySelectorAll(".operatorBtn");
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', function () {
        if (a === null) {
            operator = this.value;
            a = parseInt(numDisplay);
            numsArray = [];
            console.log(getFuncName());
        }
        else if (a !== null && b === null) {
            operator = this.value;
            a = result;
            numDisplay = result;
            display.textContent = numDisplay;
            b = null;
            numsArray = [];
            console.log(getFuncName());
        }
        else if (a !== null && b !== null) {
            operate(operator, a, b);
            operator = this.value;
            a = result;
            numDisplay = result;
            display.textContent = numDisplay;
            b = null;
            numsArray = [];
            console.log(getFuncName());
        }
        else {
            console.log('SOMETHING ELSE IS HAPPENING!!!!!!!!!!!!!!!!!!!!!!');
        }
    });
});

function operate(operator, a, b) {
    if (operator === 'add') {
        add(a, b);
        console.log(`add: ${getFuncName()}`);
    }
    else if (operator === 'subtract') {
        subtract(a, b);
        console.log(`subtract: ${getFuncName()}`);
    }
    else if (operator === 'multiply') {
        multiply(a, b);
        console.log(`multiply: ${getFuncName()}`);
    }
    else if (operator === 'divide') {
        divide(a, b);
        console.log(`divide: ${getFuncName()}`);
    }
    else if (operator === 'equals') {
        console.log(`equals: ${getFuncName()}`);
    }
    else {
        console.log('!!! STOP - i\m getting curious --------------------------------');
        console.log(`curious: ${getFuncName()}`);
    }
}
function add(a, b) {
    result = a + b;
    // a = result; !!!!!!!!!!!!!!!!!!!! ???????????????????
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
    if (a !== null && b !== null) {
        operate(operator, a, b);
        a = result;
        numDisplay = result;
        display.textContent = numDisplay;
        b = null;
        numsArray = [];
        console.log(getFuncName());
    }
    else {
    }
}

function clearCalc() {
    operator = null;
    a = null;
    b = null;
    result = null;
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
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    console.log(`RESULT: ${result}`);
    console.log(`NumsArray: ${numsArray}`);
    console.log(`NumDisplay: ${numDisplay}`);
}

function test() {
    console.log('test worked');
}