let num = +prompt("nhập vào một số");
let result =1;
if(num >0)
{
    for(let i = 1;i<=num; i++)
    {
        result = result * i;
    }
    console.log(result);
}
else{
    console.log("invalid");
}