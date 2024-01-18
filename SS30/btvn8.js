function findNumber(arr, number) {
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === number) {
          result.push(arr[i], arr[j], arr[k]);
          return result;
        }
      }
    }
  }

  return result;
}

let numbers = [2, 4, 6, 8, 10, 12, 14];

let num = 26;

let result = findNumber(numbers, num);

console.log("Mảng gồm 3 phần tử có tổng bằng ", num, ":");
console.log(result);
