let num1 = +prompt("NSốhập vào số thứ nhất!");
let num2 = +prompt("Nhập vào số thứ hai!");
let cal = prompt("Nhập vào phép tính!");


if(!Number.isNaN(num1,num2))
{
    if(cal === "+")
    {
        let result = num1+num2;
        console.log("kết quả =",result);
    }
    else if(cal === "-")
    {
        let result = num1-num2;
        console.log("kết quả =",result);
    }
    else if(cal === "*")
    {
        let result = num1*num2;
        console.log("kết quả =",result);
    }
    else if(cal === "/")
    {
        let result = num1/num2;
        console.log("kết quả =",result);
    }
    else {
        console.log("Phép tính không hợp lệ.");
    }

}
else 
{
    console.log("Dữ liệu nhập vào không phải là số!");
}