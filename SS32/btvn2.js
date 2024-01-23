let infomation = {
  id: undefined,
  name: undefined,
  phone: undefined,
  address: undefined,
};
// nhap
infomation.id = +prompt("Nhập vào id");
infomation.name = prompt("Nhập vào tên");
infomation.phone = prompt("Nhập vào số điện thoại");
infomation.address = prompt("Nhập vào địa chỉ");

console.log(infomation);
// xoa
delete infomation.address;
console.log(infomation);
// them
infomation.email = prompt("Nhập vào email");
console.log(infomation);
