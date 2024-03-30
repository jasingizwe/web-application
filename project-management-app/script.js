let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        tasks.push({
            name: taskInput.value,
            completed: false
        });
        renderTasks();
        taskInput.value = "";
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => toggleTask(index));
        taskList.appendChild(li);
    });
}
