let todoList = document.getElementById("todo-list");
let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
  let task = todoInput.value;
  if (task) {
    let li = document.createElement("li");
    li.textContent = task;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function () {
      li.remove();
      saveTodoList();
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = "";
    saveTodoList();
  }
});

function saveTodoList() {
  var tasks = [];
  var liElements = todoList.getElementsByTagName("li");
  for (var i = 0; i < liElements.length; i++) {
    tasks.push(liElements[i].textContent);
  }
  localStorage.setItem("todoList", JSON.stringify(tasks));
}

function loadTodoList() {
  var savedTasks = localStorage.getItem("todoList");
  if (savedTasks) {
    var tasks = JSON.parse(savedTasks);
    for (var i = 0; i < tasks.length; i++) {
      var li = document.createElement("li");
      li.textContent = tasks[i];

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", function () {
        li.remove();
        saveTodoList();
      });

      li.appendChild(deleteButton);
      todoList.appendChild(li);
    }
  }
}

loadTodoList();
