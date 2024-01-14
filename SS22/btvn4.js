let year = +prompt("nhập vào một năm nào đó!");

if (!Number.isNaN(year) && Number.isInteger(year)){
    if (year % 4 === 0 && year %100 !== 0 || year % 400 === 0 ){
        console.log(year ,"là năm nhuận!");
    }
    else {
        console.log(year ,"không phải là năm nhuận!");
    }
}
else {
    console.log("năm bạn nhập không hợp lệ!");
}