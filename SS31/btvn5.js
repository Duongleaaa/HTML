function groupE(arrCln, size) {
  let result = [];
  // duyệt mảng arrCln mỗi vòng tăng i lên size đơn vị để tạo mảng con
  for (let i = 0; i < arrCln.length; i += size) {
    let subArr = [];
    // duyệt mảng lớn theo độ dài mảng con và đảy vào mảng con
    for (let j = 0; j < size; j++) {
      subArr.push(arrCln[i + j]);
    }
    result.push(subArr);
  }
  return result;
}

let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let subArrSize = 2;
console.log(groupE(arr, subArrSize));
