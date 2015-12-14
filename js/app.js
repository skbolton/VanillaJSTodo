// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so that the user can manage daily tasks
var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
// Add a new task
var createNewTaskElement = function(taskString) {
  var listItem = document.createElement('li');
  // input checkbox
  var checkbox = document.createElement('input') //checkbox
  // label
  var label = document.createElement('label');
  // input text
  var editInput = document.createElement('input'); // text
  // button .edit
  var editButton = document.createElement('button');
  // button .delete
  var deleteButton = document.createElement('button');

  // Each element needs modifying
  checkbox.type = "checkbox";

  if(typeof label.innerText === "undefined") {
    label.textContent = taskString;
  }
  else {
    label.innerText = taskString;
  }

  editInput.type = "text";

  // Cross Browswer support for innertext for delete and edit button
  if(typeof editButton.innerText === "undefined") {
    editButton.textContent = "Edit";
  }
  else {
    editButton.innerText = "Edit";
  }

  editButton.className = "edit"

  if(typeof deleteButton.innerText === "undefined") {
    deleteButton.textContent = "Edit";
  }
  else {
    deleteButton.innerText = "Edit";
  }

  deleteButton.className = "delete";

  // Each element needs appending
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}
var addTask = function() {
  // Create a new list item with the text from the #new-task
  var listItem = createNewTaskElement(taskInput.value);
  // Append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";

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
    // Remove the parent list item from the ul
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);

}
var taskCompleted = function() {
    // Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}
var taskIncomplete = function() {
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);


}
var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  console.log('bind events listeners');
  // select taskListItem children
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');
  // bind the editTask to edit button
  editButton.onclick = editTask;
  // bind the deleteTask to the delete button
  deleteButton.onclick = deleteTask;
  // bind taskCompleted to the checkbox
  checkBox.onchange = checkboxEventHandler;
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
