function find(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    let secondNum = sum - firstNum;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === secondNum) {
        return [firstNum, secondNum];
      }
    }
  }
}

const sum = parseInt(prompt("Nhập vào một số nguyên:"));
const arr = [2, 4, 6, 8, 10];
const findNum = find(arr, sum);
if (findNum) {
  console.log("Cặp số tìm được:", findNum);
}
