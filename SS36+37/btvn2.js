let button = document.getElementById("button");
let count = 1;
button.addEventListener("click", function () {
  if (count % 2 === 0) {
    button.innerText = "ON";
    count++;
  } else {
    button.innerText = "OFF";
    count++;
  }
});
