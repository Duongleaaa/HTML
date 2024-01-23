let editItemBtn = document.getElementById("editItemBtn");
let nameInput = document.getElementById("nameInput");
let editButtons = document.getElementsByClassName("editBtn");
let nameSpans = document.getElementsByClassName("name");

for (let i = 0; i < editButtons.length; i++) {
  editButtons[i].addEventListener("click", function () {
    let person = this.parentElement;
    let nameSpan = person.querySelector(".name");
    nameInput.value = nameSpan.innerText;

    editItemBtn.addEventListener("click", function () {
      nameSpan.innerText = nameInput.value;
      nameInput.value = "";
    });
  });
}
