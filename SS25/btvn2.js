let a = +prompt("nhập vào a");
let b = +prompt("nhập vào b");

sumOdd = 0;
sumEven = 0;
for (let i = a; i < b; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else if (i % 2 !== 0) {
    sumOdd += i;
  }
}
console.log(" tổng số lẻ là:", sumOdd);
console.log("tổng số chẵn là", sumEven);
let sum = console.log("Tổng các số lẻ và chẵn là:", sumOdd + sumEven);
