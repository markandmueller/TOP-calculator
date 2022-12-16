let numDisplay = 0;
let operator = null;
let a = null;
let b = null;

const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const buttonsMain = document.querySelector("#buttonsMain");

const operatorBtn = buttonsMain.querySelectorAll(".operatorBtn");
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', function () {
        // console.log('ya boi');
    });
});

const numBtn = buttonsMain.querySelectorAll(".numBtn");
numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', populateDisplay);
});

function populateDisplay() {
    numDisplay = this.value;
    display.textContent = this.value;
}

function add(a, b) {
    let addResult = a + b;
    return addResult;
}

function subtract(a, b) {
    let subResult = a - b;
    return subResult;
}

function multiply(a, b) {
    let multResult = a * b;
    return multResult;
}

function divide(a, b) {
    let divResult = a / b;
    return divResult;
}

function operate(operator, a, b) {
    if (operator === add) {
        console.log(add(a, b));
    }
    else if (operator === subtract) {
        console.log(subtract(a, b));
    }
    else if (operator === multiply) {
        console.log(multiply(a, b));
    }
    else if (operator === divide) {
        console.log(divide(a, b));
    }
    else {
        console.log('whoops - i\m getting curious');
    }
}

// operate(add, 10, 10);
// operate(subtract, 10, 10);
// operate(multiply, 10, 10);
// operate(divide, 10, 10);

function test() {
    console.log('test worked');
}
// test();