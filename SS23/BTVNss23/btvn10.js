let input = +prompt("Nhập vào một số nguyên dương:");

for (let i = 1; i <= input; i++) {
  let row = '';
  for (let j = 1; j <= input - i + 1; j++) {
    row += '*';
  }
  
  console.log(row);
}

for (let i = 1; i <= input; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  
  console.log(row);
}