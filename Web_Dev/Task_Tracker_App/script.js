// script.js 
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array call
// TODO: Call the render function to update the table with the new tasks.
// Section 2: App State Variables
let tasks =[];
// Section 3: Cached Element References 
const taskForm = null;
const taskTable = null;
document.addEventListener("DOMContentLoaded", function() {
    taskForm = document.getElementById("taskForm");
    taskTable = document.getElementById("taskTable");
});
// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    // TODO: Validate input fields
    // TODO: Update the tasks array
    render();
} 
// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the ar
} 
// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
} 
