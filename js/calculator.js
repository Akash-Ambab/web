// JS FORM VALIDATION CODE STARTS HERE

function checkValue(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById("answer").innerHTML = "You have not given values";
        return false;
    }
    return true;
}

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if(checkValue(num1, num2)) {
        let add = num1 + num2;
        document.getElementById("answer").innerHTML = num1 + " + " + num2 + " = " + add;
    }
}

function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(checkValue(num1, num2)) {
        let sub = num1 - num2;
        document.getElementById("answer").innerHTML = num1 + " - " + num2 + " = " + sub;
    }
}

function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(checkValue(num1, num2)) {
        let mul = num1 * num2;
        document.getElementById("answer").innerHTML = num1 + " x " + num2 + " = " + mul;
    }

}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(checkValue(num1, num2)) {
        let divide = num1 / num2;
        document.getElementById("answer").innerHTML = num1 + " / " + num2 + " = " + divide;
    }
}

function percentage() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(checkValue(num1, num2)) {
        let percentage = (num1 / 100) * num2;
        document.getElementById("answer").innerHTML = num1 + " % of " + num2 + " = " + percentage;
    }
}

function reset() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("answer").innerHTML = "";

}

//JAVASCRIPT CALCULATOR CODE ENDS HERE


// JQuery Calculator

$(document).ready(function() {
    $(".calKey").click(function() {
        let data = $(this).val();
        $("#calScreen").val($("#calScreen").val() + data); //Append data
    });

    $(".del").click(function() {
        let data = $("#calScreen").val();
        data = data.slice(0, -1);
        $("#calScreen").val(data);
    })

    $(".solve").click(function() {
        let data = $("#calScreen").val();
        let answer = eval(data);
        $("#jqanswer").html("Answer: " + answer);
    });

    $(".reset").click(function() {
        $("#calScreen").val("");
        $("#jqanswer").html("");
    })
})

//JQuery Calculator Code Ends Here