let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
let list = document.getElementById("nameList");

names.forEach(function (name) {
  let li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);
});
