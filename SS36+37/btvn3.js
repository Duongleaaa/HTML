let input = document.getElementById("input");
let div = document.getElementById("content");

input.addEventListener("input", function () {
  let valueInput = input.value;
  div.innerHTML = valueInput;
});
