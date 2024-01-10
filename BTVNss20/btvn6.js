let celcius = +prompt("mời nhập vào nhiệt độ hôm nay (C)!");

// C/5 = (F-32)/9 --> F = ((c*9)/5) + 32

let fahrenheit = (((celcius*9)/5) + 32);
console.log("Nhiệt độ F là:" + fahrenheit);