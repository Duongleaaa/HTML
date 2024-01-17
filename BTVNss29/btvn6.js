function bigFirstChar(string) {
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let charracter = arr[i];
    let newChar = charracter[0].toUpperCase() + charracter.slice(1);
    arr[i] = newChar;
  }
  let newArr = arr.join(" ");
  return newArr;
}

let string = "hello world!";
let result = bigFirstChar(string);
console.log(result);
