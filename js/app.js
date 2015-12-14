// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so that the user can manage daily tasks
var taskInput = document.getElementById('new-task'); // new task input
var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
// Add a new task
var addTask = function() {
  console.log('task has been added');
  // When the button is pressed
  // Create a new list item with the text from the #new-task
    // input checkbox
    // label
    // input text
    // button .edit
    // button .delete
    // each element, needs modified and appended
}
// Edit and existing task
var editTask = function() {
  // When edit button is pressed
    // if the class of the parent is .editMode
      // Switch back from .editMode
      // label text become the input's value
    // else
      // Switch to .editMode
      // input value becomes the label's text

  // Toggle .editMode
}
var deleteTask = function() {
// Delete an existing task
  // When the Delet button is pressed
    // Remove the parent list item from the ul
}
var taskCompleted = function() {
// Mark a task as complete
  // When the Checkbox is checked
    // Append the task list item to the #completed-tasks
}
var taskIncomplete = function() {
// Mark a completed task as incomplete

}
var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  console.log('bind events listeners');
  // select taskListItem children
  var checkBox = ;
  var editButton = ;
  var deleteButton = ;
  // bind the editTask to edit button
  // bind the deleteTask to the delete button
  // bind taskCompleted to the checkbox
}

// set the click handler to the addTask function
addButton.onclick = addTask;

// cycle over the incompleteTaskHolder ul li's
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
