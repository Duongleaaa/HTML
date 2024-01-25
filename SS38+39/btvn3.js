let allContainer = document.querySelector(".all");
let numberElement = document.querySelector(".all h1");

let fadeInTime = 300; // Thời gian tăng dần

let fadeInOpac = 1 / fadeInTime; // Bước tăng opacity cho mỗi frame khi tăng dần

let opacity = 0; // Giá trị ban đầu của opacity
let numberValue = 10; // Giá trị ban đầu của số 0%

function fadeIn() {
  opacity = opacity + fadeInOpac;
  allContainer.style.opacity = opacity;

  numberValue = Math.round(opacity * 100); // Tính giá trị số % dựa trên giá trị opacity
  numberElement.textContent = numberValue + "%";

  if (opacity < 1) {
    requestAnimationFrame(fadeIn);
  } else {
    numberElement.style.display = "none"; // Ẩn số khi đạt 100%
  }
}

fadeIn();
