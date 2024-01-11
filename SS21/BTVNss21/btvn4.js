let num = +prompt("mời ngài hãy nhập vào một số "); 
if(Number.isNaN(num)){ // kiểm tra có nhập số không.
    console.log("xin hãy nhập số, không nhập chữ và kí tự đặc biệt");
}
else{
    let testNum = num >0? num + "là số dương": num + "là số âm";
    console.log(testNum);
}
