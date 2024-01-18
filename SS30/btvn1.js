function checkArr(arrCln) {
  let halfArr = parseInt(arrCln.length / 2);
  for (let i = 0; i < halfArr; i++) {
    if (arrCln[i] !== arrCln[arrCln.length - i - 1]) {
      return console.log(`đây không phải là hàm đối xứng`);
    } else {
      return console.log(`đây là hàm đối xứng`);
    }
  }
}

let arr = [1, 4, 2, 6, 9, 5];
checkArr(arr);
let arr2 = [1, 2, 3, 4, 3, 2, 1];
checkArr(arr2);
