// script.js
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    // Add task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = '';
            renderTasks();
        }
    });

    // Initial render
    renderTasks();
});