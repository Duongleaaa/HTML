document.getElementById("myButton").addEventListener("click", function () {
  let x = document.getElementById("myInput").value;
  let node = document.createElement("li");
  let textnode = document.createTextNode(x);
  node.appendChild(textnode);
  document.body.appendChild(node);
});
