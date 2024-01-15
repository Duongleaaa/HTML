let num = prompt("Nhập vào số nguyên dương bất kì.");
console.log(num);

//dùng split('') để chuyển chuỗi thành mảng
let numNew = num.split('');
console.log(numNew);

// dùng reverse () để đảo ngược mảng
let numReverse = numNew.reverse();
console.log(numReverse);

// dùng join('') để chuyển mảng về dạng chuỗi.
let numReverseReal = numReverse.join('');
numReverseReal = parseInt(numReverseReal);
console.log(numReverseReal);

// nguồn tham khảo: https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/chuoi-trong-javascript/dao-nguoc-chuoi-trong-javascript/#:~:text=Ch%C3%BAng%20ta%20c%C3%B3%203%20ph%C6%B0%C6%A1ng%20ph%C3%A1p%20ti%C3%AAu%20bi%E1%BB%83u,%C4%90%E1%BA%A3o%20ng%C6%B0%E1%BB%A3c%20chu%E1%BB%97i%20trong%20JavaScript%20b%E1%BA%B1ng%20v%C3%B2ng%20l%E1%BA%B7p