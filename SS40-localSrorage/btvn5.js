let signUp = document.querySelector(".signUp");
let users = [];
signUp.onclick = function () {
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  users.push({ username, email, password });

  localStorage.setItem("users", JSON.stringify(users));
};
