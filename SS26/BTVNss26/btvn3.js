let arr = new Array(1, 3, 5, 8, 0, 1, 2, 3, 1, 2, 1, 44, 56);
let number = parseInt(+prompt(`Nhập vào một số nguyên bất kì`));
let count = 0;
for (let num of arr) {
  if (num === number) {
    count++;
  }
}
if (count !== 0) {
  console.log(`Số lần xuất hiện của ${number} là ${count}`);
} else {
  console.log(`Không tìm thấy ${number}`);
}
