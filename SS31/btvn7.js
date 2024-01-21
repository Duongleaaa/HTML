function fakeFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNumbers = fakeFilter(arr, function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);
