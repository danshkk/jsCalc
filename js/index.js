var btnPlus = document.getElementById('btnPlus');
var btnMinus = document.getElementById('btnMinus');
var btnMultiply = document.getElementById('btnMultiply');
var btnSplit = document.getElementById('btnSplit');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');

function makeOperation (operation) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if(operation === '+') {
        var result = number1 + number2;
        window.alert(result);
    }
    else if (operation === '-') {
        var result = number1 - number2;
        window.alert(result);
    } 
    else if (operation === '*') {
        var result = number1 * number2;
        window.alert(result);
    }
    else if (operation === '/') {
        var result = number1 / number2;
        window.alert(result);
    } 
    else {
        window.alert('Unknowm operation');
    }
}

function operationOnBtnClick(eventObject) {
    var event = eventObject.currentTarget;
    var opera = event.innerHTML;
    makeOperation(opera);
}

var operationButtons = [btnPlus, btnMinus, btnMultiply, btnSplit];

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', operationOnBtnClick);
}