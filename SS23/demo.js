// cơ bản , vòng lặp này cũng giống với vòng lặp trong C.

// for (let i = 0; i<5;i++)
// {
//     console.log("xin chào",i);
// }

// i = i + 2 ==> i += 2


// kỹ thuật quy nạp = tính tổng cộng dồn hoặc tính tích dồn. nếu những bào quy nạp liên quan đến chuỗi thì khởi tạo biến chạy = "";

// tạo một ứng dụng game bingo
// cho trước kết quả là 49
//cho người dùng nhập vào dự đoán, nếu kết quả người dùng nhập vào lớn hơn 49 thì in ra too big!, ngược lại in too small, = thì bingo!
// = thì end chương trình

let bingo = 49;
do {
    let input = +prompt("mời dự đoán số đang ẩn!");
    if(input === bingo){
        console.log("BINGO!!! QUÁ GHÊ GỚM!");
        break;
    }
    else if (input > bingo){
        console.log("too Big!!");
    }
    else if (input < bingo){
        console.log("too Small!!");
    }
}
while (1);