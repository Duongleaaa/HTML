let product = {
  id: 1,
  name: "Máy tính xách tay",
  price: 15000000,
  quantity: 10,
};
for (let key in product) {
  console.log(key + ": " + product[key]);
}
