// Sử dụng if/else: 
// - Thích hợp cho việc kiểm tra nhiều điều kiện không phải là cố định hoặc không dựa trên một biến cụ thể.
// - Có thể kiểm tra các điều kiện phức tạp và không chỉ là so sánh bằng.
// - phức tạp hơn nếu có nhiều điều kiện.
// - xác định dựa trên miền giá trị.

let score = 85;

if (score > 90) {
    console.log("Xuất sắc");
} else if (score > 80) {
    console.log("Giỏi");
} else if (score > 70) {
    console.log("Khá");
} else {
    console.log("Trung bình");
}

// Sử dụng switch/case:
// - Thích hợp cho việc kiểm tra một biến cụ thể với nhiều giá trị cố định.
// - Không thích hợp cho các điều kiện phức tạp, chỉ có thể so sánh bằng.
// - dễ đọc hơn.
// - xác định dựa trên giá trị cố định.

let grade = 'B';

switch (grade) {
    case 'A':
        console.log("Xuất sắc");
        break;
    case 'B':
        console.log("Giỏi");
        break;
    case 'C':
        console.log("Khá");
        break;
    default:
        console.log("Trung bình");
        break;
}
