let input = document.getElementsByClassName("input1")[0];
let button = document.getElementById("button");
let listElement = document.getElementById("list");

input.style.backgroundColor = "yellow";

input.onchange = function () {
  if (input.value !== "") {
    input.style.backgroundColor = "white";
  } else {
  }
};

button.onclick = function () {
  let li = document.createElement("li");
  li.textContent = input.value;
  listElement.appendChild(li);

  input.value = "";
  input.style.backgroundColor = "yellow";
};
