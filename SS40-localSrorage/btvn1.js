let userName = document.querySelector(".name");
let age = document.querySelector(".age");
let email = document.querySelector(".email");
let ok = document.querySelector(".submit");

ok.onclick = function () {
  let user = {
    name: userName.value,
    age: age.value,
    email: email.value,
  };

  // chuyen thanh chuoi json.
  let userJson = JSON.stringify(user);
  // luu vao local
  localStorage.setItem("user", userJson);

  // lay thong tin tu local
  let userRe = localStorage.getItem("user");

  if (userRe) {
    let storeUser = JSON.parse(userRe);

    // hien thi ra man hinh
    document.querySelector(".display").innerHTML = `
      <p>Ho va ten: ${storeUser.name}</p>
      <p>Tuoi: ${storeUser.age}</p>
      <p>Email: ${storeUser.email}</p>
    `;
  } else {
    console.log("Không có thông tin người dùng trong Local Storage.");
  }
};
