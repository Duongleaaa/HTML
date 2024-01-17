alert(`Nhập vào hai số a và b`);
let a = parseInt(prompt("Nhập vào a"));
let b = parseInt(prompt("Nhập vào b"));

let arr = new Array();
if (a > b) {
  for (let i = b + 1; i < a; i++) {
    arr.push(i);
  }
  console.log(arr);
} else if (a < b) {
  for (let i = a + 1; i < b; i++) {
    arr.push(i);
  }
  console.log(arr);
}
