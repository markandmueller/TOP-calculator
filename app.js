function test() {
    console.log('test worked');
}

// test();

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
    } else { console.log('whoops - i\m getting curious'); }
}

operate(add, 10, 10);
operate(subtract, 10, 10);
operate(multiply, 10, 10);
operate(divide, 10, 10);