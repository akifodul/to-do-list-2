// Gerekli HTML elemanlarını seçin
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Yeni bir görev ekleme işlevi
function addTask() {
  var task = taskInput.value;
  if (task !== "") {
    var listItem = document.createElement("li");
    listItem.innerText = task;
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

// "Ekle" düğmesine tıklandığında addTask işlevini çağırın
addButton.addEventListener("click", addTask);

// Klavyeden "Enter" tuşuna basıldığında addTask işlevini çağırın
taskInput.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
