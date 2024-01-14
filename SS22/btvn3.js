// let num = +prompt("Mời nhập vào một số!");

// if(!Number.isNaN(num) && Number.isInteger(num)){
//     if(num % Math.sqrt(num) === 0){
//         console.log(num, "là một số chính phương");
//     }
//     else {
//         console.log(num,"không phải là số chính phương");
//     }
// }
// else {
//     console.log("số bạn nhập không hợp lệ!");
// }
// bài trên đã đáp ứng gần đủ yêu cầu nhưng có vấn đề, 0 cũng là số chính phương nhưng vẫn nhận định không phải.



// giải pháp:
let num = +prompt("Mời nhập vào một số!");

if(!Number.isNaN(num) && Number.isInteger(num)){
    let i = 0;
    while(i*i <= num){
        if(i*i === num){
            console.log(num, "là một số chính phương");
        }
        i++;
    }
}
else {
    console.log("số bạn nhập không hợp lệ!");
}