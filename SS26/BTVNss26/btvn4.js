alert("Nhập vào hai số nguyên dương a và b");
let a = parseInt(prompt("Nhập vào a"));
let b = parseInt(prompt("Nhập vào b"));
let number = new Array();
let curIndex = 0;
if (a > b) {
  for (let i = 1; i < a; i++) {
    if (i % b === 0) {
      number[curIndex] = i;
      curIndex++;
    }
  }
  console.log(number);
} else if (a < b) {
  for (let i = 1; i < b; i++) {
    if (i % a === 0) {
      number[curIndex] = i;
      curIndex++;
    }
  }
  console.log(number);
} else {
  console.log(`a bằng b, vì vậy không thể liệt kê các số được yêu cầu.`);
}
