function printOddNumbers(n) {
  let sum = 0;
  let oddNumber = n % 2 === 0 ? n - 1 : n;
  while (oddNumber > 0) {
    console.log(oddNumber);
    sum += oddNumber;
    oddNumber = oddNumber - 2;
  }
  if (sum % 2 === 0) {
    console.log("Không có số lẻ thỏa mãn yêu cầu.");
  } else {
    return sum;
  }
}
let n = parseInt(prompt("Nhập một số nguyên dương n:"));
let result = console.log(`Tổng lẻ là`, printOddNumbers(n));
