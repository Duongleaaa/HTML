let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", function () {
  let lenInput = input.value;
  if (lenInput.length > 10) {
    alert("không hợp lệ");
  } else {
    alert("thành công");
  }
});
