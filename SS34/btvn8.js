let deleteButtons = document.getElementsByClassName("deleteBtn");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    let row = this.closest("tr");

    if (row) {
      row.remove();
    }
  });
}
