let arr = new Array(1, 2, 5, 3, 7, 8, 4, 0);
// tìm ra phần tử lớn nhất và nhỏ nhất trong mảng.
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (max <= arr[j]) {
      max = arr[j];
    } else if (min > arr[j]) {
      min = arr[j];
    }
  }
}
console.log(`min = ${min}`);
console.log(`max = ${max}`);

// https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/mang-trong-javascript/tim-max-va-min-trong-mang-javascript/
/*
cách 1: so sánh từng phần tử trong mảng
c2: sắp xếp mảng tăng dần sau đó lấy số đầu số cuối.
c3: dùng các hàm có sẵn.
 */
