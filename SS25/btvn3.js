let n = +prompt("nhập vào số nguyên dương n");
let m = 0;
sum = 0;
for (let i = 0; i < n; i++) {
  if (sum < n) {
    sum = sum + i;
    console.log(i);
    console.log(sum);
  }
}
