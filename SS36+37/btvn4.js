let a = document.getElementById("input1");
let b = document.getElementById("input2");
let result = document.getElementById("output");

a.onchange = b.onchange = function () {
  result.value = Number(a.value) + Number(b.value);
};
