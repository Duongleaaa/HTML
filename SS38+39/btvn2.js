let searchContainer = document.getElementById("searchContainer");
let searchIcon = document.querySelector("#searchContainer ion-icon");
let content = document.querySelector("#searchContainer .content");
let input = document.querySelector(".input");
let expanded = false;
input.style.opacity = "0";
searchContainer.onclick = function () {
  if (expanded) {
    content.style.opacity = "0";
    input.style.opacity = "1";
    setTimeout(function () {
      searchIcon.setAttribute("name", "search-outline");
      content.style.display = "none";
      searchContainer.classList.remove("expanded");
    }, 100);
  } else {
    searchIcon.setAttribute("name", "close-outline");
    content.style.display = "flex";
    setTimeout(function () {
      content.style.opacity = "1";
      searchContainer.classList.add("expanded");
    }, 0);
  }

  expanded = !expanded;
};
