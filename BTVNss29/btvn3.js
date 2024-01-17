function charCount(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count++;
  }
  return count;
}

let hello = "Hello World!";
console.log(charCount(hello));
