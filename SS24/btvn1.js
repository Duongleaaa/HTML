let number = +prompt("Nhập vào một số nguyên dương bất kì.");

if(Number.isInteger(number))
{
    for( let i = 1; i<=number ; i++)
    {
        if(i % 2 === 0)
        {
            console.log(i**2);
        }
    }
}
else
{
    console.log("invalid");
}