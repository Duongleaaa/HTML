let number = +prompt("Mời nhập số nguyên dương bất kì");

let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
  if (sum % 2 !== 0) {
    console.log(`Khi i = ${i} thì tổng = ${sum}`);
  }
}
