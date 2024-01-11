let math = +prompt("moi nhap diem toan");
let literature = +prompt("moi nhap diem van");
let english = +prompt("moi nhap diem tieng anh");

if(!Number.isNaN(math) && !Number.isNaN(literature) && !Number.isNaN(english)){
    let pointAvg = (math + literature + english)/3;
    if(pointAvg <= 10 && pointAvg >= 8){
        pointAvg = +(pointAvg.toFixed(1));
        console.log("xep loai gioi voi diem trung binh la", pointAvg);
    }
    else if(pointAvg <= 7.9 && pointAvg >= 6.5){
        pointAvg = +(pointAvg.toFixed(1));
        console.log("xep loai kha voi diem trung binh la", pointAvg);
    }
    else if(pointAvg <= 6.4 && pointAvg >= 5){
        pointAvg = +(pointAvg.toFixed(1));
        console.log("xep loai trung binh voi diem trung binh la", pointAvg);
    }
    else if (pointAvg < 5 && pointAvg>=0){
        pointAvg = +(pointAvg.toFixed(1));
        console.log("xep loai yeu voi diem trung binh la", pointAvg + "\n" + "nop tien hoc lai thoi ban!");
    }else {
        console.log("vui long nhap lai.");
    }
}
else{
    console.log("dung nhap gi khac ngoai so.");
}



