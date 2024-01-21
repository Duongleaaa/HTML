function fakeFind(arr, fn) {
  for (let i in arr) {
    let test = fn(arr[i]);
    if (test === true) {
      return arr[i];
    }
  }
}
let rest = fakeFind([1, 2, 3, 4, 5], function (e) {
  return e === 1; // true or false
});
console.log(rest);
