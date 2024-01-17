function longestElement(arr) {
  let maxLength = 0;
  let longElement = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      longElement = arr[i];
    }
  }
  return longElement;
}

let arr = ["1", "banana", "Duong", "AOV"];
let result = longestElement(arr);
console.log(`phần tử dài nhất là: ${result}`);
