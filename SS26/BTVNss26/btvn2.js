// tìm kiếm phần tử trong mảng.
let search = prompt("Nhập vào phần từ muốn tìm kiếm trong mảng.");
let arr = new Array(1, 10, "Dương", "Linh", "Diệu", 1.23);
let check = false;
for (let item in arr) {
  if (arr[item] === search) {
    console.log(`Vị trí của ${search} là ${item}`);
    check = true;
  }
}
if (!check) {
  console.log(`Không tìm thấy phần tử trong mảng!`);
}
