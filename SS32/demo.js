// cách 1

// let person = {
//   // key : value
//   // Thuộc tính
//   name: "Gia Thiều",
//   age: 19,
//   school: "PTIT",
//   curly: "toc xoan",

//   // methods (phuong thuc)
//   eat: function () {
//     console.log(`Nhồm nhoàm....`);
//   },
//   flirt: function () {
//     console.log(`Chào em, anh đứng từ chiều,...`);
//   },
//   nhinThayHuyen: function () {
//     console.log(`Mắt sáng lên!!`);
//   },
// };

// let classmate = {
//   name: "Viết Hoàng",
//   age: 18,
//   outStyle: "Vũ",

//   run: function () {
//     console.log("Bịch bịch bịch...");
//   },
//   sit: function () {
//     console.log("Gõ phím tạch tạch tạchhh!!");
//   },
//   sleep: function () {
//     console.log("ZZzz...");
//   },
// };

// // cách 2 tạo đối tượng cùng 1 chủ đề.
// // contructor function
// function Student(name, age, grade) {
//   this.name = name;
//   this.age = age;
//   this.grade = grade;

//   // hành vi
//   this.introduce = function () {
//     console.log(this); // dùng this thì this ngầm trỏ vào chính đối tượng sử dụng nó.
//     console.log(`Hello, my name is ${this.name} `);
//   };
// }
// let student1 = new Student(`John`, 18, `good`);
// let student2 = new Student(`Mary`, 19, `Normal`);
// let student3 = new Student(`Hung`, 20, `average`);

// // .(dot notation); truy xuất vào phương thức và thuộc tính của 1 đối tượng.
// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.introduce();
// student2.introduce();
// student3.introduce();

// //dùng class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }
// let student1 = new Person("John", 30);
// console.log(student1);
// student1.introduce();

// thuộc tính

// let person = {
//   // key : value
//   // Thuộc tính
//   name: "Gia Thiều",
//   age: 19,
//   school: "PTIT",
//   curly: "toc xoan",

//   // methods (phuong thuc)
//   eat: function () {
//     console.log(`Nhồm nhoàm....`);
//   },
//   flirt: function () {
//     console.log(`Chào em, anh đứng từ chiều,...`);
//   },
//   nhinThayHuyen: function () {
//     console.log(`Mắt sáng lên!!`);
//   },
// };

// let classmate = {
//   name: "Viết Hoàng",
//   age: 18,
//   outStyle: "Vũ",

//   run: function () {
//     console.log("Bịch bịch bịch...");
//   },
//   sit: function () {
//     console.log("Gõ phím tạch tạch tạchhh!!");
//   },
//   sleep: function () {
//     console.log("ZZzz...");
//   },
// };

// console.log(person); // thêm những thuộc tính chưa có.
// person.height = 1.93;
// person.weigth = "90kg";

// // read one
// console.log(person.name);

// // read all
// for (let key in person) {
//   console.log(key);
//   console.log(key, person[key]);
//   // nếu dùng dấu chấm thì sẽ truy xuất vào key trong person nhưng nó không tồn tại.
// }

// // update. gọi nó ra và gán vào thôi.
// person.name = "Gia Thiều Chad";
// console.log(person);

// //delete.
// delete person.curly;
// console.log(person);

//----------------------------------------------------------------------------------------------
// class Student {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
// }

// let students = [
//   new Student(1, `John`),
//   new Student(2, `Mary`),
//   new Student(3, `Nick`),
// ];

// // read one
// console.log(students[0].name);
// console.log(students[0].id);
// read all
// for (let i in students) {
//   console.log(students[i].id);
//   console.log(students[i].name);
// }

// // creat
// let newStudent = new Student("", "");
// newStudent.id = +prompt("id");
// newStudent.name = prompt("name");
// students.push(newStudent);
// console.log(students);

// // update
// console.log(students);
// students[0].name = "Huyen";

// delete
// console.log(students);
// delete students[0];
// dùng pop, shift, splice cũng được.

// đối tượng lồng đối tượng, nested object. tương tự như C, gán thuộc tính vd address: address(đã được khởi tạo.);
