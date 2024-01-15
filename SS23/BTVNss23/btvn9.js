let input = +prompt("Nhập vào một số nguyên dương:");
console.log("Dãy Fibonacci có tổng giá trị nhỏ hơn", input, "là:");

let fib1 = 0;
let fib2 = 1;
let fibonacci = fib1 + fib2;

while (fibonacci < input) {
  console.log(fibonacci);

  fib1 = fib2;
  fib2 = fibonacci;
  fibonacci = fib1 + fib2;
}