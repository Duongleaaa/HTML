function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findArr(arr, number) {
  let smallestSubarray = [];
  let smallestLength = arr.length + 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subarray = arr.slice(i, j + 1);
      let sum = findSum(subarray);

      if (sum > number && subarray.length < smallestLength) {
        smallestSubarray = subarray;
        smallestLength = subarray.length;
      }
    }
  }

  return smallestSubarray;
}

let numbers = [2, 4, 6, 8, 10, 12, 14];

let num = 25;

let result = findArr(numbers, num);

console.log("Mảng con nhỏ nhất có tổng lớn hơn ", num, ":");
console.log(result);
