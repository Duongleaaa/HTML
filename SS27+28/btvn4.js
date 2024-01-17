let arr = new Array(1, 3, 5, 7, 9, 1, 2, 3, 4, 5);
let evenArr = [];
let oddArr = [];
console.log(`Mảng ban đầu là ${arr}`);

for (let index in arr) {
  if (arr[index] % 2 === 0) {
    evenArr.push(arr[index]);
  } else if (arr[index] % 2 !== 0) {
    oddArr.push(arr[index]);
  }
}
console.log(`Mảng chẵn là ${evenArr}`);
console.log(`Mảng lẻ là ${oddArr}`);
