//c1
// function endsWithStr(str, target) {
//     return str.endsWith(target);
//   }

//   console.log(endsWithStr("Hello, world!", "world!"));
//   console.log(endsWithStr("Hello, world!", "Hello"));
// c2
function testa(str, target) {
  return str.slice(-target.length) === target;
}
console.log(test("Hello, world!", "world!"));
console.log(test("Hello, world!", "Hello"));
