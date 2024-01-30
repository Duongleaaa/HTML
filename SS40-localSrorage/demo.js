// cách lưu trữ lên local.
// kiểu dữ liệu JSON là gì? Ứng dụng.
//1. Chuyển đổi kiểu dữ liệu JS sang kiểu JSON.
let user = {
  id: 1,
  name: "Nguyen Van Anh",
  age: 21,
};
// cú pháp chuyển đổi js --> json.
let userJson = JSON.stringify(user);
console.log(`Dữ liêu sau khi chuyển đổi là,`, userJson);

// cú pháp chuyển đổi từ json --> js.
let userJS = JSON.parse(userJson);
console.log(`Dữ liệu chuyển là:`, userJS);

// lưu trữ dữ liệu trên local
localStorage.setItem("user", userJson);
//----------------------------------------
// dạng mảng
let users = [
  {
    id: 1,
    name: "Nguyen Van Anh",
    age: 21,
  },
  {
    id: 2,
    name: "Nguyen Van Anh",
    age: 24,
  },
];

localStorage.setItem("users", JSON.stringify(users));

// lấy dữ liệu từ local storage.
localStorage.getItem("users");

// tạo ra biến lưu dữ liệu lấy về
// let listUser = localStorage.getItem("users");
// console.log(listUser);
// let listUserPrase = JSON.parse(listUser);

let listUserPrase = JSON.parse(localStorage.getItem("users"));
console.log(listUserPrase);

// Xóa dữ liệu của local storage theo key.
localStorage.removeItem("user");

// xoas tất cả dữ liệu của local storage.
localStorage.clear();
