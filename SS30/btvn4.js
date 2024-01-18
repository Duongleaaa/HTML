function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let numbers = [2, 3, 5, 7, 10, 11, 13, 17, 19, 23];

console.log("Các số nguyên tố trong mảng:");

for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    console.log(numbers[i]);
  }
}
