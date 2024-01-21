// chuyển về một mảng, duyệt từng phần tử mảng và kiểm tra độ dài thông qua biến đếm.
// đẩy độ dài chuỗi con vào một mảng.
// sau đó so sánh tìm max
function find(stringCln) {
  // chuyển về mảng với mỗi phần tử là một từ
  stringCln = stringCln.split(" ");
  let lengthArr = [];
  for (let i in stringCln) {
    lengthArr.push(stringCln[i].length);
  }
  console.log(lengthArr);

  // tìm max
  let max = lengthArr[0];
  let maxIndex = 0; // đếm vị trí của phần tử dài.
  for (let i = 1; i < lengthArr.length; i++) {
    if (lengthArr[i] > max) {
      max = lengthArr[i];
      maxIndex = i;
    }
  }
  console.log(max);
  console.log(maxIndex);

  // in ra
  console.log(
    `phần tử dài nhất trong chuỗi là: ${stringCln[maxIndex]} ;index = ${maxIndex}`
  );
}
let string = "The quick brown fox jumped over the lazy dog";
find(string);
