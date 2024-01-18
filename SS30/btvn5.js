function upLastChar(chuoi) {
  let arr = chuoi.split(" ");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if (word.length > 0) {
      let lastChar = word[word.length - 1];
      let upChar = lastChar.toUpperCase();

      let upCharNew = word.slice(0, -1) + upChar;
      newArr.push(upCharNew);
    } else {
      newArr.push("");
    }
  }

  let result = newArr.join(" ");
  return result;
}

let input = prompt("Nhập vào một chuỗi bất kỳ:");

let result = upLastChar(input);

console.log(result);
