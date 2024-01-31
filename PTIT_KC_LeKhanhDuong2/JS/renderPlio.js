let heroInfo = JSON.parse(localStorage.getItem("heroInfo"));
let personalDetail = JSON.parse(localStorage.getItem("personalDetail"));
let projects = JSON.parse(localStorage.getItem("projects"));

document.querySelector(
  ".self-introduce-item"
).innerText = `Hi, I'm ${heroInfo.name}`;
document.querySelector(".self-introduce-item:nth-of-type(2)");
document.querySelector(".content-img img").src = heroInfo.imgUrl;

document.querySelector(".deltails-top p").innerText = personalDetail.name;
document.querySelector(
  ".table-info tr:nth-of-type(1) td:nth-of-type(3)"
).innerText = personalDetail.dob;
document.querySelector(
  ".table-info tr:nth-of-type(2) td:nth-of-type(3)"
).innerText = personalDetail.spokenLanguages.join(" - ");
document.querySelector(
  ".table-info tr:nth-of-type(3) td:nth-of-type(3)"
).innerText = personalDetail.nationality;
document.querySelector(
  ".table-info tr:nth-of-type(4) td:nth-of-type(3)"
).innerText = personalDetail.interest.join(", ");

let logoItems = document.querySelectorAll(".logo-item");
personalDetail.techs.forEach((tech, index) => {
  let logoItem = logoItems[index];
  logoItem.querySelector(".deltas-icon img").src = tech.imgUrl;
  logoItem.querySelector(".deltas-icon-name h2").innerText = tech.techName;
  logoItem.querySelector(
    ".deltas-icon-name p"
  ).innerText = `${tech.exp} Year Experience`;
});

let projectItems = document.querySelectorAll(".project-item");
projects.forEach((project, index) => {
  let projectItem = projectItems[index];
  projectItem.querySelector(".logo-pj-icon img").src = project.imgUrl;
  projectItem.querySelector(".logo-pj-info h3").innerText = project.projectName;
  projectItem.querySelector(".pj-link a").innerText = project.link;
});
console.log(heroInfo);
console.log(personalDetail);
console.log(projects);
