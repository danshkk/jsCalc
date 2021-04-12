var btnPlus = document.getElementById('btnPlus');
var btnMinus = document.getElementById('btnMinus');
var btnMultiply = document.getElementById('btnMultiply');
var btnSplit = document.getElementById('btnSplit');

var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');

function getNumber1() {
    return Number(input1.value);
}
function getNumber2() {
    return Number(input2.value);
}
function makeOperation (operation) {
    if(operation === '+') {
        var result = getNumber1() + getNumber2();
        window.alert(result);
    }
    else if (operation === '-') {
        var result = getNumber1() - getNumber2();
        window.alert(result);
    } 
    else if (operation === '*') {
        var result = getNumber1() * getNumber2();
        window.alert(result);
    }
    else if (operation === '/') {
        var result = getNumber1() / getNumber2();
        window.alert(result);
    } 
    else {
        window.alert('Unknowm operation');
    }
}
function btnPlusClick() {
    makeOperation('+');
}
function btnMinusClick() {
    makeOperation('-');
}
function btnMultiplyClick() {
    makeOperation('*');
}
function btnSplitClick() {
    makeOperation('/');
}

btnPlus.addEventListener('click', btnPlusClick);
btnMinus.addEventListener('click', btnMinusClick);
btnMultiply.addEventListener('click', btnMultiplyClick);
btnSplit.addEventListener('click', btnSplitClick);