// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = task.completed ? 'completed' : '';

        const textSpan = document.createElement('span');
        textSpan.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => removeTask(index);

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
        toggleButton.onclick = () => toggleTask(index);

        listItem.appendChild(textSpan);
        listItem.appendChild(toggleButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    });
}

// Initial render
renderTasks();
