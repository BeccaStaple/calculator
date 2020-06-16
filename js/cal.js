"use strict;"
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const myAnswer = document.getElementById("myAnswer");
    

function adding() {
    myAnswer.value = parseInt(num1.value) + parseInt(num2.value);
    const newOutput = document.createElement("p");
    document.getElementById("output").appendChild(newOutput);
    newOutput.innerText = document.getElementById("num1").value + " + " + document.getElementById("num2").value + " = " + document.getElementById("myAnswer").value;
}

function subtract() {
    myAnswer.value = parseInt(num1.value) - parseInt(num2.value);
    const newOutput = document.createElement("p");v
    document.getElementById("output").appendChild(newOutput);
    newOutput.innerText = document.getElementById("num1").value + " - " + document.getElementById("num2").value + " = " + document.getElementById("myAnswer").value;
}

function divide() {
    myAnswer.value = parseInt(num1.value) / parseInt(num2.value);
    const newOutput = document.createElement("p");
    document.getElementById("output").appendChild(newOutput);
    newOutput.innerText = document.getElementById("num1").value + " / " + document.getElementById("num2").value + " = " + document.getElementById("myAnswer").value;
}

function multiply() {
    myAnswer.value = parseInt(num1.value) * parseInt(num2.value);
    const newOutput = document.createElement("p");
    document.getElementById("output").appendChild(newOutput);
    newOutput.innerText = document.getElementById("num1").value + " * " + document.getElementById("num2").value + " = " + document.getElementById("myAnswer").value;
}


