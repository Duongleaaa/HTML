let a = +prompt("nhập vào số a");
let b = +prompt("nhập vào số b");

if(Number.isInteger(a,b) && a>0 && b>0)
{
    for(let i = 1; i<=a ;i++)
    {
        if(i%b === 0)
        {
            console.log(i);
        }
    }
}
else{
    console.log("invalid");
}
