const taskInput =document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList =document.getElementById('taskList');
addBtn.onclick =function() {
    const text = taskInput.value;
    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";

        delBtn.onclick = function(){
            taskList.removeChild(li);
        };
        li.appendChild(delBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
};