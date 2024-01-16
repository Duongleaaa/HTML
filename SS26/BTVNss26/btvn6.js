let arr = new Array(1, 3, 4, `sp`, `ad`, `top`, -4, -5, `mid`);
let newArr = new Array();
let subArr = new Array();

for (let item in arr) {
  if (arr[item] < 0) {
    newArr.unshift(arr[item]);
  } else if (arr[item] > 0) {
    subArr.push(arr[item]);
  } else {
    newArr.push(arr[item]);
  }
}
console.log("Chưa nối", newArr);
newArr = newArr.concat(subArr);
console.log("Đã nối", newArr);
