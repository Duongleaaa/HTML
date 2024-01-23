class Product {
  constructor(id, productName, price) {
    this.id = id;
    this.productName = productName;
    this.price = price;
  }
}

let products = [
  new Product(1, "Iphone 12", 20000000),
  new Product(2, "Iphone 11", 10000000),
  new Product(3, "samsung note 10", 500000000),
];

function sort(products) {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
}

sort(products);

console.log("Danh sách sản phẩm:");
for (let i = 0; i < products.length; i++) {
  console.log(
    "ID: " +
      products[i].id +
      ", Tên sản phẩm: " +
      products[i].productName +
      ", Giá tiền: " +
      products[i].price
  );
}
