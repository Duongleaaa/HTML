let arr = [1, 2, 2, 3, 3, 4, 4, 5];
console.log(arr);
let newArr = [];
let answer = [];
for (let i = 0; i < arr.length; i++) {
  let count = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count = true;
    }
    if (count === true) {
      newArr.push(arr[i]);
      newArr.push(arr[j]);
    }
  }
}
console.log(arr);
console.log(newArr);

// https://shareprogramming.net/tim-phan-tu-chi-xuat-hien-mot-lan-trong-mang/#Cach_1_Su_dung_2_vong_lap
