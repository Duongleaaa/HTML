let input = prompt("Mời bạn nhập vào một số nguyên!");


if (!isNaN(input) && Number.isInteger(parseFloat(input))) {
    let number = parseInt(input);


    if (number % 2 === 0) {
        console.log("Đây là số chẵn!");
    } else {
        console.log("Đây là số lẻ!");
    }
} else {
    console.log("Không hợp lệ. Vui lòng nhập một số nguyên.");
}