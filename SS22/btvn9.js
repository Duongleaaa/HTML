let month = +prompt("Nhập vào tháng");
let year = +prompt("Nhập vào năm");

if(!Number.isNaN(month,year) && Number.isInteger(month,year) && month<13 && month>0 && year >0)
{
    switch(month)
    {
        case 1:
            console.log("ngày trong tháng", month,"năm", year, "là 30");
            break;
        case 2:
            console.log("ngày trong tháng", month,"năm", year, "là 28");
            break;
        case 3:
            console.log("ngày trong tháng", month,"năm", year, "là 30");
            break;
        case 4:
            console.log("ngày trong tháng", month,"năm", year, "là 31");
            break;
        case 5:
            console.log("ngày trong tháng", month, "năm",year, "là 30");
            break;
        case 6:
            console.log("ngày trong tháng", month,"năm", year, "là 31");
            break;
        case 7:
            console.log("ngày trong tháng", month,"năm", year, "là 31");
            break;
        case 8:
            console.log("ngày trong tháng", month,"năm", year, "là 30");
            break;
        case 9:
            console.log("ngày trong tháng", month, "năm",year, "là 31");
            break;
        case 10:
            console.log("ngày trong tháng", month, "năm",year, "là 30");
            break;
        case 11:
            console.log("ngày trong tháng", month, "năm",year, "là 31");
            break;
        case 12:
            console.log("ngày trong tháng", month,"năm", year, "là 31");
            break;
    }
}
else
{
    console.log("invalid");
}
