let num = +prompt("Nhập vào một số");

if(Number.isInteger(num) && num>0)
{
    for(let i = 1;i<=num; i++ )
    {
        console.log(i);
    }
}
else{
    console.log("invalid");
}
