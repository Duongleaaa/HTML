let month = +prompt("xin hay nhap thang trong nam.");
if(Number.isInteger(month) && !Number.isNaN(month)){
    if (month > 0 && month<13){
        switch(month){
            case 1:
                console.log("thang 1 co 31 ngay");
                break;
            case 2:
                console.log("thang 2 co 28 ngay");
                break;
            case 3:
                console.log("thang 3 co 30 ngay");
                break;
            case 4:
                console.log("thang 4 co 30 ngay");
                break;
            case 5:
                console.log("thang 5 co 31 ngay");
                break;
            case 6:
                console.log("thang 6 co 31 ngay");
                break;
            case 7:
                console.log("thang 7 co 30 ngay");
                break;
            case 8:
                console.log("thang 8 co 30 ngay");
                break;
            case 9:
                console.log("thang 9 co 31 ngay");
                break;
            case 10:
                console.log("thang 10 co 31 ngay");
                break;
            case 11:
                console.log("thang 11 co 30 ngay");
                break;
            case 12:
                console.log("thang 12 co 31 ngay");
                break;
    
        }
    }
    else{
        console.log("lam on nhap dung cac thang trong nam" + ",_" + "lam gi co thang" + month + "? :))");
    }

}
else{
    console.log("lam on hay nhap so nguyen la cac thang trong nam :((");
}