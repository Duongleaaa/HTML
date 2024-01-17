function find(arr, string) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(string) !== -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = ["1", "banana", "Duong", "AOV"];
let input = prompt(`Nhập vào một chuỗi bất kì`);
console.log(find(arr, input));
