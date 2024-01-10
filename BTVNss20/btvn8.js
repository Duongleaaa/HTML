let radius = +prompt("mời bạn nhập vào bán kính của hình tròn.");
const PI = 3.14159;
let area = PI*(radius**2) ;
area = area.toFixed(2);

let perimeter = 2*radius*PI;
perimeter = perimeter.toFixed(2);

console.log("Diện tích:" + area);
console.log("Chu vi:" + perimeter);