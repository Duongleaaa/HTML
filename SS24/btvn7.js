let number = +prompt("Nhập vào một số bất kì");

// số nguyên tố là số chỉ có ước là 1 và chính nó.
let isPrime = 1;
if(number > 2)
{
    for (let i = 2; i<Math.sqrt(number); i++)
    {
        if(number % i ===0)
        {
            isPrime = 1;
        }
    }
    if(isPrime === 1)
    {
        console.log(number, "là số nguyên tố");
    }
    else
    {
        console.log(number, "không phải là số nguyên tố");
    }
}
else
{
    console.log(number, "không phải số nguyên tố");
}

// tham khảo:https://blog.luyencode.net/kiem-tra-so-nguyen-to-su-dung-c-c-va-java/