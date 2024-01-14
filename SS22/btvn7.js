// alert("hãy nhập vào a, b , c trong phương trình a^2 + bx + c = 0");
// let a = +prompt("nhập vào số a");
// let b = +prompt("nhập vào số b");
// let c = +prompt("nhập vào số c");

// if(!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)){
//     let delta = (b**2)-4*a*c;
//     if(delta < 0){
//         console.log("phương trình vô nghiệm");
//     }
//     else if (delta > 0){
//         console.log("phương trình có hai nghiệm phân biệt:");
//         let x1 = (-b + Math.sqrt(delta))/2*a;
//         let x2 = (-b - Math.sqrt(delta))/2*a;
//         console.log(x1);
//         console.log(x2);

//     }
//     else {
//         console.log("phương trình có nghiệm kép");
//         let x = -b/(2*a);
//         console.log(x);
//     }
// }
// else{
//     console.log("không hợp lệ");
// }


let a = +prompt("Nhập vào a");
let b = +prompt("Nhập vào b");
let c = +prompt("Nhập vào c");
let delta = b*b - 4*a*c;
let x1, x2;

if(!Number.isNaN(a,b,c)){
  if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2*a);
    x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log("Phương trình có hai nghiệm phân biệt: x1 = " , x1 + ", x2 = " , x2);
  } else if (delta === 0) {
    x1 = -b / (2*a);
    console.log("Phương trình có nghiệm kép: x1 = x2 = " , x1);
  } else {
    console.log("Phương trình vô nghiệm");
  }
  
}
else{
  console.log("Không hợp lệ");
}

