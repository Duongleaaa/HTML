/* 1. tạo một mảng arr và yêu cầu người dùng nhập vào.
2. tạo hai biến start và end đê xác định đầu cuối của mảng con và biến sum tính tổng.
3. Duyệt mảng arr và cộng dồn tất cả các phần tử trong mảng.
khi sum lớn hơn số nhập vào thì trừ giới hạn đầu của mảng con.
nếu tổng bằng chính số nhập vào thì cho giới hạn cuối bằng phần tử đó luôn, sau đó thoát
4. thoát ra kiểm tra nếu giới hạn cuối đã được tìm thấy thì tạo một mảng con để chứa khoảng đó.
*/
let arr = new Array(1, 5, 6, 3, 2, 1, 1, 5, 6, 7);
let input = +prompt("Nhập vào một số nguyên bất kì");

let arrStart = 0;
let arrEnd = -1;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  while (sum > input) {
    sum = sum - arr[arrStart];
    arrStart++;
  }
  if (sum === input) {
    arrEnd = i;
    break;
  }
}
if (arrEnd !== -1) {
  let newArr = arr.splice(arrStart, arrEnd + 1);
  console.log(newArr);
} else {
  console.log(`Không tìm thấy mảng con đáp ứng.`);
}
