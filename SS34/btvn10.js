/*
innerText: chỉ lấy văn bản, bỏ qua thẻ html bên trong

textContent: lấy cả văn bản lẫn các thẻ html bên trong, 
            chính xác như viết trong html kể cả dấu cách

innerHTML:lấy cả văn bản lẫn thẻ html trong thẻ được chỉ định.
*/
let h = document.getElementById("demo-id");
let h2 = document.getElementById("demo-id2");
let h3 = document.getElementById("demo-id3");

console.log(h.textContent); // lấy toàn bộ nội dung kể cả xuống dòng xuất hiện trong code
console.log(h2.innerText); // chỉ lấy nội dung
console.log(h3.innerHTML); // lấy tất cả text lần các thẻ trong thẻ html chỉ định.

h.innerHTML = "<i>hello update</i>"; // cập nhật cả nội dung và thuộc tính.
h2.textContent = "<b>hello textContent</b>"; // chỉ nhận nội dung mới là text. cập nhật text.
h3.innerText = "helolo";
