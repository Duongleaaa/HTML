let userNameInput = document.querySelector("#userNameInput");
let addUserButton = document.querySelector("#addUserButton");
let userInfoSection = document.querySelector("#userInfoSection");
let userInfoDisplay = document.querySelector("#userInfoDisplay");
let deleteUserButton = document.querySelector("#deleteUserButton");

addUserButton.onclick = function () {
  let userName = userNameInput.value.trim();

  if (userName) {
    localStorage.setItem("userName", userName);
    update();
  }
};

deleteUserButton.onclick = function () {
  localStorage.removeItem("userName");
  update();
};

function update() {
  let storedUserName = localStorage.getItem("userName");

  if (storedUserName) {
    userNameInput.value = "";
    addUserButton.style.display = "none";
    userInfoSection.style.display = "block";
    userInfoDisplay.value = `User Name: ${storedUserName}`;
    deleteUserButton.style.display = "block";
  } else {
    userNameInput.value = "";
    addUserButton.style.display = "block";
    userInfoSection.style.display = "none";
    deleteUserButton.style.display = "none";
  }
}

update();
