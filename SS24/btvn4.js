let n = parseInt(prompt("Nhập vào một số nguyên dương:"));
let sum = 0;
let i = 2; 

while (sum + i**2 < n) {
    console.log(i**2);
    sum = sum + i**2;
    i += 2; 
}

console.log("Tổng các bình phương số chẵn là: " + sum);
