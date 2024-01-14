let a = +prompt("nhập vào số a");
let b = +prompt("nhập vào số b");

if(!Number.isNaN(a) && !Number.isNaN(b)){
    if(a % b === 0){
        console.log(a, "chia het cho", b);
    }
    else if (b % a === 0){
        console.log(b, "chia het cho", a);
    }
    else {
        console.log("trong hai số ", a,"và",  b, "không có số nào chia hết cho số còn lại");
    }
}
else {
    console.log("xin người, đừng nhập chữ và kí tự đặc biệt.");
}