let id = document.getElementById("id");
let nameStudent = document.getElementById("name");
let button = document.getElementById("button");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let display = document.getElementById("info");

button.onclick = function () {
  if (id.value.length !== 6) {
    alert("Id 6 kí tự");
    return;
  }

  if (nameStudent.value !== "") {
    alert("Tên không được để trống");
    return;
  }

  if (age.value < 18) {
    alert("Tuổi phải lớn hơn 18");
    return;
  }

  if (phone.value !== 11 && phone.value !== 10) {
    alert("Số máy không phải định dạng Việt Nam");
    return;
  }

  if (!email.value.include("@")) {
    alert("Email không hợp lệ");
    return;
  }

  var info =
    "Student ID: " +
    id.value +
    "<br>" +
    "Student Name: " +
    nameStudent.value +
    "<br>" +
    "Age: " +
    age.value +
    "<br>" +
    "Phone: " +
    phone.value +
    "<br>" +
    "Email: " +
    email.value;

  display.innerHTML = info;

  id.value = "";
  nameStudent.value = "";
  age.value = "";
  phone.value = "";
  email.value = "";
};
