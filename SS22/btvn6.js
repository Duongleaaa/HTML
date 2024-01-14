let num = +prompt("nhập vào một số nguyên có bốn chữ số");

if(!Number.isNaN(num) && Number.isInteger(num)){
    if(999<num && num <10000){
        console.log("số hàng nghìn là:",Math.floor(num/1000));
        console.log("số hàng trăm là:",Math.floor((num%1000)/100));
        console.log("số hàng chục là:",Math.floor((num%100)/10));
        console.log("số hàng đơn vị là:",Math.floor(num%10));
    }
    else {
        console.log("đây không phải số có 4 chữ số!");
    }
}
else {
    console.log("số không hợp lệ!");
}