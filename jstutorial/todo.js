const taskInput = document.getElementById("taskinput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("tasklist");

addBtn.addEventListener("click", function () {
    let task = taskInput.value;
    let li = document.createElement("li")
    li.textContent = task;
    taskList.appendChild(li);
    taskList.value = "";
});


taskInput.addEventListener("keypress", function(event){
    if(event.key=== "Enter"){
        addBtn.click();
    }
});