// function cal(a, b) {
//   return a + b;
// }

// cal(10, 20);
// cal(10, 40);
// cal(5, 20);
// cal(5, 15);

function increaseBy(arr, n) {
  for (let i in arr) {
    arr[i] = a[i] + n;
  }
  return arr;
}

function multiplyBy(arr, n) {
  for (let i in arr) {
    arr[i] = a[i] * n;
  }
  return arr;
}
//------------------------------------------------------------
// tổng quát hóa lại.
function map(arr, fn) {
  // fn là hàm truyền vào.
  for (let i in arr) {
    arr[i] = fn(arr[i]); // trả về giá trị tương ứng với từng phần tử có trong mảng đã được apply một công thức nào đó.
  }
  return arr;
}

let result = map([1, 2, 3, 4], function (e) {
  return e + 2;
});

console.log(result);
// console.log(increaseBy([1, 2, 3, 4], 3));
