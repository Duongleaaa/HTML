// Đảo ngược mảng cách 1; thay đổi mảng gốc.
let arr = new Array(1, 2, 3, 4, `vip`, `pro`, true);
console.log(`Mảng chưa đảo`, arr);
arr.reverse();
console.log(`Mảng đã đảo`, arr);

// Đảo ngược cách 2; không thay đổi mảng gốc
let mix = new Array(1, 2, 3, 4, `vip`, `pro`, true);
console.log(`Mảng chưa đảo`, mix);
let newMix = new Array();

for (let i = 0; i < mix.length; i++) {
  newMix.unshift(mix[i]);
}
console.log(newMix);
