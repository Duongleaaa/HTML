function truncate(stringCln, nCln) {
  stringCln = stringCln.split(""); // chuyển thành mảng
  let index = stringCln.length - nCln; // tìm phần cần xóa
  stringCln.splice(index, nCln, "..."); // xóa và thêm ...
  stringCln = stringCln.join(""); // chuyển thành chuỗi
  return stringCln;
}

let string = "Xin chào, tôi là Dương";
let n = 12;
console.log(truncate(string, n));
