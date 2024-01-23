class Book {
  constructor(author, name) {
    this.author = author;
    this.name = name;
  }
}

let bookList = [
  new Book("nguyễn Thế Minh", "Làm giàu"),
  new Book("Đặng Đức Anh", "Đời là bể khổ"),
  new Book("Nguyễn Thị Ngọc", "Tư duy nhanh"),
];

let author = prompt("Nhập tên tác giả:");

let findBook = [];
for (let i = 0; i < bookList.length; i++) {
  if (bookList[i].author === author) {
    findBook.push(bookList[i]);
  }
}

if (findBook.length > 0) {
  console.log("Các sách của tác giả ", author, ":");
  for (let i = 0; i < findBook.length; i++) {
    console.log(
      "Tác giả: " + findBook[i].author,
      ", Tên sách: ",
      findBook[i].name
    );
  }
} else {
  console.log("Không tìm thấy sách của tác giả ", author);
}
