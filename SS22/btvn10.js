/*Tìm hiểu bề truthy và falsy
    - truthy là những giá trị khi chuyển đổi thành kiểu dữ liệu boolean thì sẽ được giá trị là true
    - falsy là những giá trị khi chuyển đổi thành kiểu dữ liệu boolean thì sẽ được giá trị là false

    chúng ta có thể dựa vào list những giá trị falsy để xác định những giá trị truthy (còn lại)
    những giá trị falsy gồm:

        + false: Đây là giá trị boolean false.
        + 0: Đây là giá trị số 0.
        + '' hoặc "": Đây là chuỗi rỗng.
        + null: Đây là một giá trị null (rỗng).
        + undefined: Đây là giá trị chưa được định nghĩa.
        + NaN: Đây là kết quả của một phép tính không hợp lệ, ví dụ như chia một số cho 0. hay chuyển một chuỗi chữ thành số.

    còn lại là truthy, ví dụ như:

        + true: Đây là giá trị boolean true.
        + Số khác 0: Bất kỳ giá trị số nào khác 0 đều được xem là "truthy".
        + Chuỗi không rỗng: Bất kỳ chuỗi nào có ít nhất một ký tự đều được xem là "truthy".
        + Đối tượng và mảng: Các đối tượng và mảng không rỗng được xem là "truthy".
        + Hàm: Bất kỳ hàm nào cũng được xem là "truthy".
*/

// chương trình ví dụ cụ thể:
let number = 123;
if(number)
{
    console.log(true);
}else 
{
    console.log(false);
}

let onekill = "";
if(onekill)
{
    console.log(true);
}
else
{
    console.log(false);
}
