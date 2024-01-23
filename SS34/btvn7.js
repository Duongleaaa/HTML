let table = document.getElementById("myTable");
let addRowBtn = document.getElementById("addRowBtn");

addRowBtn.addEventListener("click", function () {
  // Tạo một hàng mới
  var newRow = document.createElement("tr");

  // Tạo 3 ô trong hàng mới
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");
  var cell3 = document.createElement("td");

  cell1.textContent = "cell 1";
  cell2.textContent = "cell 2";
  cell3.textContent = "cell 3";

  // Gắn các ô vào hàng mới
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);

  // Thêm hàng mới vào bảng
  table.appendChild(newRow);
});
