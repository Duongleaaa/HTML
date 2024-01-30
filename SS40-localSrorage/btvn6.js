let loginButton = document.querySelector(".login");

loginButton.onclick = function () {
  let loginUsername = document.querySelector("#loginUsername").value;
  let loginPassword = document.querySelector("#loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiem tra thong tin dang nhap
  let loggedInUser = users.find(function (user) {
    return user.username === loginUsername && user.password === loginPassword;
  });

  if (loggedInUser) {
    // Lưu thông tin vào sessionStorage
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    alert("Đăng nhập thành công!");
  } else {
    alert("Thông tin đăng nhập không chính xác!");
  }
};
