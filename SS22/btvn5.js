let a = +prompt("nhập vào số a.");
let b = +prompt("nhập vào số b.");

if(!Number.isNaN(a) && !Number.isNaN(b)){
    if(a != 0){ // dùng == vì nếu so sánh kiểu dữ liệu thì nếu người dùng nhập vào số thực thì sẽ sai.
        let result = -b/a;
        console.log("phương trình có nghiệm là:", result);
    }
    else if (a == 0) {
        if(b == 0){
            console.log("phương trình vô nghiệm!");
        }
        else if(b != 0){
            console.log("nghiệm đúng với mọi x!");
        }
    }
}
else {
    console.log("số bạn nhập không hợp lệ!");
}