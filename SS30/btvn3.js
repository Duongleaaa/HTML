function sort(str) {
  let characters = [];
  let numbers = [];
  let specials = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (/[a-zA-Z]/.test(char)) {
      char.push(char);
    } else if (!isNaN(Number(char))) {
      numbers.push(char);
    } else {
      specials.push(char);
    }
  }

  return characters.concat(numbers, specials);
}

let input = prompt("Nhập vào một chuỗi:");
let result = sort(input);

console.log(result);
