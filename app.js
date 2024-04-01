var count = 1;
var mainSection = document.getElementById("mainSection");

function addItem() {
  var noteInput = document.getElementById("noteInput");

  var taskItem = document.createElement("section");
  taskItem.setAttribute(
    "class",
    "d-flex flex-column align-items-center mt-5 border rounded-2"
  );
  var taskHead = document.createElement("h5");
  taskHead.setAttribute("class", "w-100 bg-body-secondary p-2 m-0");
  taskItem.appendChild(taskHead);
  taskHead.innerText = "Task " + count;
  var taskDiv = document.createElement("div");
  taskDiv.setAttribute(
    "class",
    "w-100 d-flex justify-content-around align-items-center bg-body-tertiary"
  );
  taskItem.appendChild(taskDiv);

  var taskPara = document.createElement("p");
  taskPara.setAttribute("class", "w-100 p-1 m-0");
  taskDiv.appendChild(taskPara);
  taskPara.innerText = noteInput.value;

  var taskDelete = document.createElement("button");
  taskDelete.setAttribute("class", "btn btn-danger m-2");
  taskDelete.setAttribute("onclick", "deleteTask(this)");
  taskDelete.innerText = "Delete";
  taskDiv.appendChild(taskDelete);

  var taskEdit = document.createElement("button");
  taskEdit.setAttribute("class", "btn btn-primary m-2");
  taskEdit.setAttribute("onclick", "editTask(this)");
  taskEdit.innerText = "Edit";
  taskDiv.appendChild(taskEdit);

  //   console.log(taskItem);

  mainSection.appendChild(taskItem);
  count = count + 1;
  noteInput.value = "";
}

function deleteTask(ele) {
  ele.parentNode.parentNode.remove();
  //   console.log(task.parentNode.parentNode.remove());
}

function deleteItems() {
  //   mainSection.remove(childNodes);
  mainSection.innerHTML = "";
  //   console.log(mainSection.childNodes);
}

function editTask(elem) {
  var editValue = prompt(
    "Enter edit value",
    elem.parentNode.firstElementChild.innerHTML
  );
  elem.parentNode.firstElementChild.innerHTML = editValue;
  // console.log(elem.parentNode.firstElementChild);
}
