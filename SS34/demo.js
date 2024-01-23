// GHI CHÚ VỀ DOM VÀ EVENTS.
//===============================HƯỚNG DẪN BAN ĐẦU======================================
// // clg.log và clg.dir cho ra hình dáng của document.
// console.dir(document);

// //-----------------------------------------------------------------------------

// // phương thức gọi thẻ html đang có sẵn id sang js. lấy 1 phần tử
// document.getElementById("demo-id");
// console.log("Thẻ html đó là:", document.getElementById("demo-id"));
// console.log("Thẻ đó là:", document.getElementById("demo-id2"));

// //-----------------------------------------------------------------------------

// // phương thức gọi nhiều thẻ html dùng class. lấy nhiều phần tử.
// document.getElementsByClassName("list-item");
// let listLi = document.getElementsByClassName("list-item");
// console.log("Tập thẻ html đó là:", listLi);
// // nó giống mảng nhưng không phải là mảng. và không dùng được phương thức mảng.

// // truy cập vào phần tử như trong mảng.
// let li1 = listLi[0];
// console.log(" thẻ đầu", li1);
// let lastLi = listLi[listLi.length - 1];
// console.log("thẻ cuối", lastLi);
// //dùng for lấy ra toàn bộ
// console.log("các thẻ li");
// for (let i = 0; i < listLi.length; i++) {
//   console.log(`thẻ li ${i}`, listLi[i]);
// }

// //-----------------------------------------------------------------
// // truy cập tập hợp các thẻ cùng tên
// let listDiv = document.getElementsByTagName("div");
// console.log("Danh sách divs", listDiv);

//  ==========================NHỮNG BỘ THUỘC TÍNH VÀ PHƯƠNG THỨC QUAN TRỌNG==============
// let h1 = document.getElementById("demo-id");

// console.log(h1.textContent); // lấy toàn bộ nội dung kể cả xuống dòng xuất hiện trong code
// console.log(h1.innerText); // chỉ lấy nội dung
// console.log(h1.innerHTML); // lấy tất cả text lần các thẻ trong thẻ html chỉ định.

// // có thể cập nhật lại giá trị cho thuộc tính bằng phép gán.
// h1.innerHTML = "<i>hello update</i>"; // cập nhật cả nội dung và thuộc tính.
// h1.textContent = "<b>hello textContent</b>"; // chỉ nhận nội dung mới là text. cập nhật text.
// h1.innerText = "helolo";

// // nối
// h1.innerText += " , Nội dung được nối vào";

// //-----------------------------------------------------------
// // thao tác với attribute
// console.log(h1.id); // lấy ra id

// // lấy ra tập hợp class
// let classList = h1.classList;
// console.log("Danh sách class của h1", classList);
// // duyệt
// for (let i = 0; i < classList.length; i++) {
//   console.log(classList[i]);
// }

// // add() remove() contain()
// classList.add("demo-class3");
// classList.remove("demo-class1");
// classList.contains("demo-class2"); // true
// console.log(classList.contains("demo-class2"));

//-----------------------------------------------------------------------
// thuộc tính style
// let h1 = document.getElementById("demo-id");
// h1.style;
// console.log(h1.style);

// h1.style.backgroundColor = "red";
// h1.style.border = "10px solid black";
// h1.style.fontFamily = "Arial, Helvetica, sansSserif";
// h1.style.borderRadius = "50%";
// h1.style.height = "200px";
// h1.style.width = "200px";
// h1.style.textAlign = "center";
// h1.style.padding = "100px";

// //-------------------------------------------------------------------
// //thuộc tính  value trong input.
// let input = document.getElementById("demo-value");
// input.value = "Hello world";
// console.log("Giá trị hiện tại", input.value);

// ==============================================phần nằm ngoài comment html.
// doccument.creatElement()

let div = document.createElement("div");
let li = document.createElement("li");

let ul = document.getElementsByTagName("ul")[0]; // [ul] nếu không truy cập vào phần tử. vì gêtlement không phải id đều tạo mảng.

li.innerHTML = "<i>hello new Element</i>";
li.classList.add("list-item");
ul.appendChild(li);
console.log(div);
console.log(li); // mới chỉ tạo ra chưa có liên kết với html-web.

li.remove(); // xóa.
ul.remove();
// cần gắn vào.
