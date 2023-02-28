let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");


function addTask() {
    let taskText = taskInput.value;
    if (taskText.trim() === "") {
        alert("Please enter a task.");
    } else {
        let li = document.createElement("li");
        //li.innerText = taskText;
        li.innerHTML = `${taskText} <button id="done_task" onclick="checkTask(this)">✅</button><button id="cancel_task" onclick="clearTask(this)">❌</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function checkTask(button) {
    button.parentElement.style.opacity = "0.5";
    button.parentElement.style.textDecoration = "line-through";
}

function clearTask(button) {
    button.parentElement.remove();
}

function clearAll() {
    window.location.reload();
}

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("addBtn").click();
    }
  });
