let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.onclick = function () {
  let idPlayer = input.value;
  localStorage.removeItem(idPlayer);
};
