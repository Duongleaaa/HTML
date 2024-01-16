let arr = [`Doremon`, 1, 5, `AOV`, true, 1.44];
let check = false;
for (let number of arr) {
  if (Number.isInteger(number)) {
    console.log(number);
    check = true;
  }
}
if (!check) {
  console.log(`Trong mảng không tồn tại số nguyên.`);
}
