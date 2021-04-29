var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var operationButtons = document.getElementsByClassName('operationButtons');

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

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', operationOnBtnClick);
}