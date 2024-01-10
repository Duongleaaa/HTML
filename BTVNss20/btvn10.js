let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(result); // =39
console.log(a); // =9 
/* 
++a hai dấu cộng đặt trước a là toán tử tăng trước. Khi sử dụng toán tử này, giá trị của a sẽ tăng lên 1 trước khi vào phép tính.
a++ hai dấu cộng đặt sau là toán tử tăng sau. Khi dùng giá trị của a sẽ tăng 1 sau khi thực hiện phép tính xong.

==> phân tích:
++a trong phép tính = 7
a đã được tăng 1 cũng = 7
a++ sẽ tăng 1 sau khi phép tính được thực hiện nên a++ = 7
    lúc này phép tính đã được thực hiện và a tăng 1 = 8
sau đó ++a lại tăng a lên 1 trước khi vào tính suy ra ++a = 9 
a lúc này = 9
---> 7+7+7+9+9 = 39.
a hiện tại = 9.
 */