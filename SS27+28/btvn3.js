let arr = new Array(1, 3, 7, 4, 2, 3, 5, 7, 8, 3, 9, 0);
console.log(`Mảng trước khi xóa ${arr}`);
let newArr = new Array();

for (let index in arr) {
  if (arr[index] % 2 === 0) {
    newArr.push(arr[index]);
  }
}
console.log(`Mảng sau khi xóa ${newArr}`);

// cách 2
let number = [1, 2, 3, 4];
console.log(number);
for (let i = 0; i < number.length; i++) {
  if (arr[i] % 2 !== 0) {
    number.splice(i, 1);
  }
}
console.log(number);
