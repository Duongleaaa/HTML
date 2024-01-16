let arr = [1, 2, 3, 2, 4, 5, 5, 6, 2];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  let isDuplicate = count > 1;
  for (let k = 0; k < duplicates.length && isDuplicate; k++) {
    if (arr[i] === duplicates[k]) {
      isDuplicate = false;
    }
  }

  if (isDuplicate) {
    duplicates.push(arr[i]);
  }
}
console.log(duplicates);
