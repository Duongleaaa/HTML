let a = 5;
let b = "5";

console.log(a == b);  // true - toán tử == sẽ so sánh giá trị của a và b, kiểu dữ liệu của a và b được chuyển đổi tự động.
// dĩ nhiên kiểu dữ liệu của b từ dạng chuỗi chuyển sang dạng số sẽ = 5. Vì vậy, a bằng b.
console.log(a === b); // false - toán tư === sẽ so sánh giá trị và kiểu dữ liệu của a và b, nhưng nó không tự động chuyển đổi kiểu dữ liệu như cái trên.
// vì thế chuỗi 5 không thể bằng số 5. bởi nó khác kiểu dữ liệu.

console.log(a != b);  // false - tương tự, kiểu dữ liệu của a và b được chuyển đổi tự động cho phù hợp, a=b nên không thể khác nhau được.
console.log(a !== b); // true - cái này không tự chuyển kiểu dữ liệu nên khi so sánh, thì chuỗi b đương nhiên sẽ khác số a. Bởi đây là so sánh cả giá trị lẫn kiểu dữ liệu.

/*==> kết luận: 
                Toán tử "==" sẽ chỉ so sánh giá trị của biến và tự động chuyển đổi kiểu dữ liệu của biến đó phù hợp.
                
                Toán tử "===" sẽ so sánh cả kiểu dữ liệu và giá trị của biến. nếu một điều kiện không thỏa mãn thì sẽ false.

                Hai toán tử "!=" và "!==" cũng dựa trên điều như vậy.
 */