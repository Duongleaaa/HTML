let dayInWeek = +prompt("Hôm nay là ngày thứ mấy?");
if (Number.isInteger(dayInWeek)){
    if(dayInWeek<10 && dayInWeek>1){
        switch (dayInWeek){
            case 2:
                console.log("Hôm nay là thứ hai!");
                break;
            case 3:
                console.log("Hôm nay là thứ ba!");
                break;
            case 4:
                console.log("Hôm nay là thứ tư!");
                break;
            case 5:
                console.log("Hôm nay là thứ năm!");
                break;
            case 6:
                console.log("Hôm nay là thứ sáu!");
                break;
            case 7:
                console.log("Hôm nay là thứ bảy!");
                break;
            case 8:
                console.log("Hôm nay là chủ nhật!");
                break;
        }
    }
    else{
        console.log("Không hợp lệ");
    }
}
else {
    console.log("Xin ngài hãy nhập một ngày trong tuần và nó là SỐ NGUYÊN!");
}
