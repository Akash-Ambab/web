
function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let add = num1 + num2;

    document.getElementById("answer").innerHTML = num1 + " + " + num2 + " = " + add;
}

function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let sub = num1 - num2;

    document.getElementById("answer").innerHTML = num1 + " - " + num2 + " = " + sub;

}

function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let mul = num1 * num2;

    document.getElementById("answer").innerHTML = num1 + " x " + num2 + " = " + mul;

}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let divide = num1 / num2;

    document.getElementById("answer").innerHTML = num1 + " / " + num2 + " = " + divide;

}

function percentage() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let percentage = (num1 / 100) * num2;
    document.getElementById("answer").innerHTML = num1 + " % of " + num2 + " = " + percentage;

}

function reset() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("answer").innerHTML = "";

}