function findMax(...arrs) {
  let maxValues = [];
  for (let i = 0; i < arrs.length; i++) {
    let max = arrs[i][0]; // chỉ đến vị trí mảng đó trong mảng lớn và vị trí phần tử của mảng con.
    for (let j = 0; j < arrs[i].length; j++) {
      if (arrs[i][j] > max) {
        max = arrs[i][j];
      }
    }
    maxValues.push(max);
  }
  console.log(maxValues);
}

let array = [1, 2, 3, 4];
let array1 = [-1, -2, -4];
let array2 = [5, 1, 2, 9];
findMax(array, array1, array2);
