let display = document.getElementById("display");
let num1 = "";
let operator = "";
let num2 = "";

document.getElementById("btn1").onclick = function () {
  appendNumber(1);
};

document.getElementById("btn2").onclick = function () {
  appendNumber(2);
};

document.getElementById("btn3").onclick = function () {
  appendNumber(3);
};

document.getElementById("btn4").onclick = function () {
  appendNumber(4);
};

document.getElementById("btn5").onclick = function () {
  appendNumber(5);
};

document.getElementById("btn6").onclick = function () {
  appendNumber(6);
};

document.getElementById("btn7").onclick = function () {
  appendNumber(7);
};

document.getElementById("btn8").onclick = function () {
  appendNumber(8);
};

document.getElementById("btn9").onclick = function () {
  appendNumber(9);
};

document.getElementById("btnAdd").onclick = function () {
  setOperator("+");
};

document.getElementById("btnSubtract").onclick = function () {
  setOperator("-");
};

document.getElementById("btnMultiply").onclick = function () {
  setOperator("*");
};

document.getElementById("btnDivide").onclick = function () {
  setOperator("/");
};

document.getElementById("btnEqual").onclick = function () {
  calculateResult();
};

document.getElementById("btnClear").onclick = function () {
  clearDisplay();
};

function appendNumber(number) {
  if (operator === "") {
    num1 += number;
    display.innerHTML = num1;
  } else {
    num2 += number;
    display.innerHTML = num2;
  }
}

function setOperator(op) {
  operator = op;
  display.innerHTML = operator;
}

function calculateResult() {
  var result;
  switch (operator) {
    case "+":
      result = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      result = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      result = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      result = parseInt(num1) / parseInt(num2);
      break;
    default:
      break;
  }
  display.innerHTML = result;
  num1 = result.toString();
  operator = "";
  num2 = "";
}

function clearDisplay() {
  display.innerHTML = "";
  num1 = "";
  operator = "";
  num2 = "";
}
