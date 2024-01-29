document.addEventListener("DOMContentLoaded", function () {
  // Số lượng theo yêu cầu
  const twitterCount = 12000;
  const youtubeCount = 5000;
  const facebookCount = 7500;

  // Thời gian chạy từ 0 đến số lượng trong ảnh
  const duration = 2000;
  const steps = 100; // Số bước để chạy từ 0 đến giá trị

  // Hàm chạy số
  function runNumber(element, target) {
    let current = 0;
    const step = target / steps;
    const interval = duration / steps;

    const updateNumber = setInterval(function () {
      current += step;
      element.innerText = Math.floor(current);

      if (current >= target) {
        clearInterval(updateNumber);
        element.innerText = target;
      }
    }, interval);
  }

  // Gọi hàm chạy số cho mỗi thành phần
  const twitterElement = document.getElementById("twitterCount");
  const youtubeElement = document.getElementById("youtubeCount");
  const facebookElement = document.getElementById("facebookCount");

  runNumber(twitterElement, twitterCount);
  runNumber(youtubeElement, youtubeCount);
  runNumber(facebookElement, facebookCount);
});
