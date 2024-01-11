let a = +prompt("nhap vao a");
let b = +prompt("nhap vao b");
let c = +prompt("nhap vao c");

if (!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)) {
    console.log("thu thu cac so duoc sap xep la:");
    let first = a < b ? (a < c ? a : c) : (b < c ? b : c); 
    let third = a > b ? (a > c ? a : c) : (b > c ? b : c); 
    let second = (a + b + c) - first - third; 

    console.log(first, second , third); 

} else {
    console.log("gia tri nhap vao khong hop le");
}
