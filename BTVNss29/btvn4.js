function check(string, character) {
  let count = 0;
  for (let i in string) {
    if (string[i] == character) {
      count++;
    }
  }
  return count;
}

let hello = "Hello World!";
let input = prompt(`nhập vào một kí tự bất kì`);
console.log(check(hello, input));
