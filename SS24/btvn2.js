let a = +prompt("Nhập vào số a bất kì");
let b = +prompt("Nhập vào số b bất kì");
let sum = 0;
if(Number.isInteger(a,b))
{
    for(let i = a+1; i<b; i++ )
    {
        sum += i;
    }
    console.log("tổng bằng =",sum);
}