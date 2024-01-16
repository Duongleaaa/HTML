// console.log("hello world");
// // cách 1.
// let studentList = new Array("duong", "linh", "dieu");
// console.log(studentList);

// // c2
// let numberList = [1, 2, 3, 4, 5, 6];

// console.log(numberList);
// // ds trong js có thể chứa các loại phần tử con khác nhau.
// let randomList = [true, "halo", 10];
// console.log(randomList);

//-------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5];
// // index      0  1  2  3  4    luôn luôn bắt đầu từ 0.
// // chỉ số của phần tử cuối cùng bằng length -1

// // lấy ra một phần tử có trong một ds.
// console.log(numbers[2]); // --> vị trí index thứ 2 = 3.

// // lấy tất cả các phần tử.
// numbers.length; // thuộc tính length. ---> 5
// console.log(numbers.length);
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`number[${i}] = `, numbers[i]); // dùng `` mới dùng được ${}
// }

// // for of.
// for (let number of numbers) {
//     // với mỗi phần tử nằm trong numbers, không quan tâm đến chỉ số.
//   console.log(`Từng phần tử`, number);
// }

// // for in .
// for (let index in numbers) {
//   console.log(`number [${index}] = `, numbers[index]); // ta có thể bỏ qua ba điều kiện biến i.
// }

//--------------------------------------------------------------------------------

let students = ["Khánh Hoèn", "Khất Hưng", "Hoàng Béo", "Hoàng tíc tốc"];

console.log(`Danh sách hiện tại`, students);
// // creat. thêm đầu unshift
// students.unshift("Nam Sơn Què");
// console.log(students);

// // creat. thêm cuối cuối push
// students.push(`Minh Béo`);
// console.log(students);

// // creat.thêm vào bất kì.
// students.splice(2, 0, "Quang Eng"); // hàm splice đa năng, tham số thứ hai là số phần tử muốn xóa., giá trị muốn thêm vào là gt thứ 3. gt thứ 1 thì là chỉ số.
// console.log(students); // nếu ghi vào mỗi vị trí thì sẽ xóa hết từ chỉ số đó.

//--------------------------------------------------------------------------------

// update
// c1
students[2] = "Dũng Lao Công";
console.log(`Danh sách sau khi cập nhật`, students);
//c2
students.splice(2, 1, "Dũng wibu");
console.log(students);

//----------------------------------------------------------------------------
// delete. xóa đầu shift
students.shift();
5;
console.log(`sau khi xoa dau`, students);
// dtl. xóa cuối pop
students.pop();
console.log(`sau khi xoa cuoi`, students);
// dtl. vị trí bất kì splice.

students.splice(1, 1);
console.log(`xoa vi tri so 2`, students);
