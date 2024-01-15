let input = +prompt("Nhập vào một số nguyên dương:");
if(input >= 2 && Number.isInteger(number))
{
    console.log("Các số nguyên tố nhỏ hơn", input, "là:");

    for (let number = 2; number < input; number++) 
    {
      let isPrime = true;
    
      for (let i = 2; i <= Math.sqrt(number); i++) 
      {
        if (number % i === 0) 
        {
          isPrime = false;
          break;
        }
      }
    
      if (isPrime) 
      {
        console.log(number);
      }
    }
    
}
else
{
    console.log("invalid");
}