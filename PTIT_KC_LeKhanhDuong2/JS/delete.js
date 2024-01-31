document.addEventListener("DOMContentLoaded", function () {
  let projects = localStorage.getItem("projects");
  if (!projects) {
    projects = [];
  } else {
    projects = JSON.parse(projects);
  }

  let tableBody = document.querySelector(".table tbody");

  function renderProjects() {
    tableBody.innerHTML = "";

    projects.forEach((project) => {
      let row = document.createElement("tr");

      let idCell = document.createElement("td");
      idCell.textContent = project.id;
      row.appendChild(idCell);

      let nameCell = document.createElement("td");
      nameCell.textContent = project.projectName;
      row.appendChild(nameCell);

      let imgCell = document.createElement("td");
      imgCell.classList.add("img-cell");
      let urlParagraph = document.createElement("p");
      urlParagraph.textContent = project.imgUrl;
      imgCell.appendChild(urlParagraph);
      row.appendChild(imgCell);

      let linkCell = document.createElement("td");
      let link = document.createElement("p");
      link.href = project.link;
      link.textContent = project.link;
      linkCell.appendChild(link);
      row.appendChild(linkCell);

      let tagsCell = document.createElement("td");
      row.appendChild(tagsCell);

      project.tags.forEach((tag) => {
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

      deleteButton.addEventListener("click", function () {
        let index = projects.findIndex((item) => item.id === project.id);
        if (index !== -1) {
          projects.splice(index, 1);
        }

        row.remove();

        localStorage.setItem("projects", JSON.stringify(projects));
      });

      row.appendChild(actionCell);

      tableBody.appendChild(row);
    });
  }

  renderProjects();
});
