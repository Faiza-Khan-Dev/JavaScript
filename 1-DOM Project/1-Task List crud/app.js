const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
loadEventListeners();
function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);
  form.addEventListener("submit", addNewTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearAllTask);
  filter.addEventListener("keyup", filterTasks);
}
function addNewTask(event) {
  event.preventDefault();
  const taskInputValue = taskInput.value;
  if (taskInputValue == "") {
    alert("Please Input Task Value");
    return;
  }
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInputValue));
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.append(link);
  taskList.append(li);
  storeTaskInLocalStorage(taskInputValue);
  taskInput.value = "";
}
function removeTask(event) {
  const currentElement = event.target;
  if (currentElement.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure ?")) {
      removeTaskInLocalStorage(currentElement.parentElement.parentElement);
      currentElement.parentElement.parentElement.remove();
    }
  }
}
function clearAllTask(event) {
  event.preventDefault();
  if (confirm("Are you sure ?")) {
    taskList.innerHTML = "";
  }
}
function storeTaskInLocalStorage(taskInputValue) {
  let tasks = [];
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(taskInputValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function removeTaskInLocalStorage(collectionItemParentElement) {
  let tasks = [];
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (singleTask, index) {
    if (singleTask == collectionItemParentElement.textContent) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getTasksFromLocalStorage() {
  let tasks = [];
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  if (tasks.length > 0) {
    tasks.forEach(function (singleTask) {
      const li = document.createElement("li");
      li.className = "collection-item";
      li.appendChild(document.createTextNode(singleTask));
      const link = document.createElement("a");
      link.className = "delete-item secondary-content";
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.append(link);
      taskList.append(li);
    });
  }
}
function filterTasks(event) {
  const currentElement = event.target;
  const filterInputValue = currentElement.value.toLowerCase();
  const collectionItems = document.querySelectorAll(".collection-item");
  if (collectionItems.length > 0) {
    collectionItems.forEach(function (singleItem) {
      const text = singleItem.textContent;
      console.log(text);
      if (text.toLowerCase().indexOf(filterInputValue) != -1) {
        singleItem.style.display = "block";
      } else {
        singleItem.style.display = "none";
      }
    });
  }
}