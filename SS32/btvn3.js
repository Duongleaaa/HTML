// Khai báo lớp SinhVien
class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

let count = parseInt(prompt("Nhập số lượng sinh viên:"));

let studentList = [];

for (let i = 0; i < count; i++) {
  let id = +prompt("Nhập ID của sinh viên thứ " + (i + 1) + ":");
  let name = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ":");

  let student = new Student(id, name);

  studentList.push(student);

  console.log("Danh sách sinh viên:");
  for (let i = 0; i < studentList.length; i++) {
    console.log("ID: " + studentList[i].id + ", Tên: " + studentList[i].name);
  }
}
