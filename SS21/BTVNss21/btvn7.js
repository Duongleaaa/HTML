
let a = +prompt("nhap vao a");
let b = +prompt("nhap vao b");
let c = +prompt("nhap vao c");

if(!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c) ){
    let max = a > b? (a>c? a:c):(b>c? b:c);
    console.log("so lon nhat la:", max);


}else{
    console.log("gia tri nhap vao khong hop le");
}
