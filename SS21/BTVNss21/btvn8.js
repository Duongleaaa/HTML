let height = +prompt("nhap vao chieu cao");
let weight = +prompt("nhap vao can nang");

// BMI = weight/(height**2)

if(!Number.isNaN(height) && !Number.isNaN(weight)){
    let realHeight = height/100;
    let bmi = weight/(realHeight**2);
    if(bmi < 18.5 && bmi > 0){
        bmi = +(bmi.toFixed(1));
        console.log("chi so BMI cua ban la:", bmi , "= gầy");
    }
    else if(bmi > 18.5 && bmi <=24.9 ){
        bmi = +(bmi.toFixed(1));
        console.log("chi so BMI cua ban la:", bmi , "= bình thường");
    }
    else if(bmi >= 25 ){
        bmi = +(bmi.toFixed(1));
        console.log("chi so BMI cua ban la:", bmi , "= thừa cân");
    }
    else if(bmi >=25 && bmi <=29.9 ){
        bmi = +(bmi.toFixed(1));
        console.log("chi so BMI cua ban la:", bmi , "= tiền béo phì");
    }
    if(bmi >=30 && bmi <= 34.9 ){
        bmi = +(bmi.toFixed(1));
        console.log("chi so BMI cua ban la:", bmi , "= béo phì độ 1");
    }
    if(bmi >= 35 && bmi <= 39.9 ){
        bmi = +(bmi.toFixed(1));
        console.log("chi so BMI cua ban la:", bmi , "= béo phì độ 2");
    }
    if(bmi >= 40 ){
        bmi = +(bmi.toFixed(1));
        console.log("chi so BMI cua ban la:", bmi , "= béo phì độ 3");
    }

}
else {
    console.log("vui long nhap dung dinh dang so!");
}