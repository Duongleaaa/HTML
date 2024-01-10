// cách 1
alert("Hello, how are you?");

//cách 2
if (confirm("Bạn có thấy người chấm bài này đẹp zai không?"))
{
    document.write("Bạn đúng rồi đấy!");
} else {
    document.write("Ơ kìa bạn...")
}

//cách 3
let result = prompt("Nếu trong thang điểm 10 thì bạn chấm mấy?");
if (result) {
  document.write(result);
} else {
  document.write('Sao không trả lời?');
}
