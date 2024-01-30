let button = document.querySelector(".button");

button.onclick = function () {
  // Lấy tất cả các keys trong localStorage
  let keys = Object.keys(localStorage);

  // Lấy phần tử để hiển thị
  let display = document.querySelector(".display");

  for (let i in keys) {
    let key = keys[i];
    let value = localStorage.getItem(key);
    display.innerHTML += `<p>${key}: ${value}</p><br>`;
  }
};
