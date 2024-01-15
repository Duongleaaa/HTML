let bingo = Math.floor(Math.random() * 10) + 1;
console.log("Số ngẫu nhiên:", bingo);

while (true) {
  let input = +prompt("Nhập vào một số từ 1 đến 10");

  if (isNaN(input)) {
    console.log("Vui lòng nhập một số hợp lệ.");
    break;
  }

  if (input < 1 || input > 10) {
    console.log("Vui lòng nhập một số từ 1 đến 10.");
    break;
  }

  if (input === bingo) {
    console.log("Bingo!!.");
    break;
  } else if (input > bingo) {
    console.log("Quá lớn!!");
  } else if (input < bingo) {
    console.log("Quá nhỏ!!");
  }
}
