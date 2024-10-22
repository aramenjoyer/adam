// Initialize task tracking
let currentTask = 0;  // Keeps track of the task number

// List of tasks for the simulator
const tasks = [
    'First Task: Format the cell as currency.',
    'Second Task: Apply a filter to the data.',
    'Third Task: Create a bar chart from the data.'
];

// Add an event listener for the "Start Practice" / "Next Task" button
document.getElementById('start-button').addEventListener('click', function() {
    // Display the current task
    document.getElementById('task').textContent = tasks[currentTask];

    // After the first task is shown, change the button label to "Next Task"
    if (currentTask === 0) {
        document.getElementById('start-button').textContent = 'Next Task';
    }

    // Move to the next task
    currentTask++;

    // If all tasks are complete, update the button and disable it
    if (currentTask >= tasks.length) {
        document.getElementById('start-button').textContent = 'All Tasks Complete!';
        document.getElementById('start-button').disabled = true; // Disable the button
    }
});
