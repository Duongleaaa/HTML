let newProjectButton = document.querySelector(".btn-primary");
newProjectButton.addEventListener("click", function () {
  let projectNameInput = document.querySelector(
    "input[placeholder='Username']"
  );
  let imageUrlInput = document.querySelector("input[placeholder='Image URL']");
  let linkInput = document.querySelector("input[placeholder='Link']");
  let tagInput = document.querySelector(
    "input[placeholder='Tag (Ex:React, Angular)']"
  );

  let projectName = projectNameInput.value;
  let imageUrl = imageUrlInput.value;
  let link = linkInput.value;
  let tags = tagInput.value.split(",").map((tag) => tag.trim());

  let projects = localStorage.getItem("projects");
  if (!projects) {
    projects = [];
  } else {
    projects = JSON.parse(projects);
  }

  let newProject = {
    id: projects.length + 1,
    projectName: projectName,
    imgUrl: imageUrl,
    link: link,
    tags: tags,
  };

  projects.push(newProject);

  localStorage.setItem("projects", JSON.stringify(projects));

  let newRow = document.createElement("tr");

  let idCell = document.createElement("td");
  idCell.textContent = newProject.id;
  newRow.appendChild(idCell);

  let nameCell = document.createElement("td");
  nameCell.textContent = newProject.projectName;
  newRow.appendChild(nameCell);

  let imgCell = document.createElement("td");
  imgCell.classList.add("img-cell");
  let urlParagraph = document.createElement("p");
  urlParagraph.textContent = newProject.imgUrl;
  imgCell.appendChild(urlParagraph);
  newRow.appendChild(imgCell);

  let linkCell = document.createElement("td");
  let linkElement = document.createElement("p");
  linkElement.href = newProject.link;
  linkElement.textContent = newProject.link;
  linkCell.appendChild(linkElement);
  newRow.appendChild(linkCell);

  let tagsCell = document.createElement("td");
  newRow.appendChild(tagsCell);

  newProject.tags.forEach((tag) => {
    let tagButton = document.createElement("button");
    tagButton.textContent = tag;
    tagButton.classList.add("tag-button");
    tagsCell.appendChild(tagButton);
  });

  let actionCell = document.createElement("td");
  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");
  actionCell.appendChild(editButton);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  actionCell.appendChild(deleteButton);

  newRow.appendChild(actionCell);

  let tableBody = document.querySelector("table tbody");
  tableBody.appendChild(newRow);

  projectNameInput.value = "";
  imageUrlInput.value = "";
  linkInput.value = "";
  tagInput.value = "";
});
