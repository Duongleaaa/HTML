let searchInput = document.querySelector(".input");
let tableRows = document.querySelectorAll(".list-country tr");

searchInput.addEventListener("input", function () {
  let searchTerm = searchInput.value.toLowerCase();

  tableRows.forEach(function (row, index) {
    if (index === 0) {
      return;
    }

    let nameCell = row.cells[0];
    let name = nameCell.textContent.toLowerCase();

    if (name.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
