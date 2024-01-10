let physicalPoint = +prompt("Xin mời nhập điểm Vật Lí:");
let biologicalPoint = Number(prompt("Xin mời nhập điểm Sinh Học:"));
let chemicalPoint = parseFloat(prompt("Xin mời nhập điểm Hóa Học:"));

let averagePoint = (physicalPoint + biologicalPoint + chemicalPoint) / 3;
//let floatAverage = Math.round(averagePoint*100)/100;  // Làm tròn số đến hai chữ số thập phân c1, nhưng math.round() là lệnh làm tròn đến số nguyên gần nhất.
let floatAverage2 = averagePoint.toFixed(2);  // Làm tròn số và giới hạn thành hai chữ số thập phân c2 nhưng nó sẽ biến thành chuỗi chứ không còn là số nữa.

console.log("Điểm trung bình ba môn là: " + floatAverage2);