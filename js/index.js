var btnPlus = document.getElementById('btnPlus');
var btnMinus = document.getElementById('btnMinus');
var btnMultiply = document.getElementById('btnMultiply');
var btnSplit = document.getElementById('btnSplit');

function btnPlusClick() {
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('num2');

    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    var summ = num1 + num2;

    window.alert(summ);
}
function btnMinusClick() {
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('num2');

    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    var summ = num1 - num2;
    window.alert(summ);
}
function btnMultiplyClick() {
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('num2');

    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    var summ = num1 * num2;
    window.alert(summ);
}
function btnSplitClick() {
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('num2');

    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    var summ = num1 / num2;
    window.alert(summ);
}



btnPlus.addEventListener('click', btnPlusClick);
btnMinus.addEventListener('click', btnMinusClick);
btnMultiply.addEventListener('click', btnMultiplyClick);
btnSplit.addEventListener('click', btnSplitClick);