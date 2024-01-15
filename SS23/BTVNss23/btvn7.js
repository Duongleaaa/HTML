let number = +prompt("nhập vào một số"); 
let sum = 0;

for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        sum += i;
    }
}

if (sum === number) {
    console.log(`Số` ,number, `là số hoàn hảo.`);
} else {
    console.log(`Số`,number, `không phải là số hoàn hảo.`);
}
