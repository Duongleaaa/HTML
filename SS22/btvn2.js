let edge1 = +prompt("nhập vào số đo canh thứ nhất.");
let edge2 = +prompt("nhập vào số đo canh thứ hai.");
let edge3 = +prompt("nhập vào số đo canh thứ ba.");

if(!Number.isNaN(edge1) && !Number.isNaN(edge2) && !Number.isNaN(edge3) ){
    if(edge1<0 || edge2<0 || edge3 <0){
        console.log("làm gì có số đo nào âm hả bạn?");
    
    }
    else if(edge1===0 || edge2===0 || edge3 ===0){
        console.log("bạn thấy tam giác nào có một cạnh bằng 0 không?");
    }
    else{
        console.log("độ dài nhập vào hợp lệ! \n");
        console.log(edge1);
        console.log(edge2);
        console.log(edge3);
    }
}
else {
    console.log("xin hãy nhập vào giá trị là số.");
}