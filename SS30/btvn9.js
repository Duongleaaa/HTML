/*
Đệ quy là một khái niệm quan trọng trong lập trình, nó liên quan đến việc một hàm gọi chính nó để giải quyết một vấn đề. Kỹ thuật đệ quy thường được sử dụng trong các bài toán có tính chất lặp đi lặp lại hoặc có cấu trúc phức tạp.

Khi một hàm gọi chính nó, gọi là một cuộc gọi đệ quy, nó thường được áp dụng trên một hoặc nhiều trường hợp nhỏ hơn của vấn đề, cho đến khi đạt được điều kiện dừng. Điều kiện dừng là một điều kiện để dừng quá trình đệ quy và trả về kết quả cuối cùng.

Cấu trúc cơ bản của một hàm đệ quy bao gồm:

Điều kiện dừng: Đây là điều kiện để dừng quá trình đệ quy và trả về kết quả. Nếu không có điều kiện dừng hợp lệ, hàm sẽ gọi chính nó một cách vô hạn, gây ra lỗi tràn ngăn xếp (stack overflow).

Trường hợp gọi đệ quy: Trong một số trường hợp, hàm sẽ gọi chính nó để giải quyết một vấn đề nhỏ hơn. Quá trình này tiếp tục cho đến khi đạt được điều kiện dừng.

Trường hợp kết hợp kết quả: Kết quả từ cuộc gọi đệ quy được kết hợp lại để tạo thành kết quả cuối cùng.
 */
