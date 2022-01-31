var taskIdCounter = 0;

var FormEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input fields are empty strings
    if(!taskNameInput || !taskTypeInput) {
        alert("You need to completely fill out the TASK FORM!")
        return false;
    } 
    FormEl.reset();
    

                        // package up data as an object
                        var taskDataObj ={
                            name: taskNameInput,
                            type: taskTypeInput
                        }
                        // send taskDataObj as an argument to createTaskEl
                        createTaskEl(taskDataObj)
};

var createTaskEl = function(taskDataObj) {
    // create list item (new "li")
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter)

    // Create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give dive a class name
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML="<h3 class ='task-name'>" + taskDataObj.name + "</h3><span class = 'task-type'>"+ taskDataObj.type + "</span>";
    // add div with task info to the "li" listItemEl
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl)

    // add entire list including div that contains task info
    tasksToDoEl.appendChild(listItemEl);

    // increase task counter for next unique ID
    taskIdCounter ++;
};

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    
    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);
    
    actionContainerEl.appendChild(editButtonEl)

    // create delete button
    var deleteButtonEl = document.createElement("button")
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // create select field
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-channge");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "COMPLETE"];

    var loadTasks = function() {
        tasks = localStorage.getItem("tasks")
    
                    if(!task){
                        task=[];
                        return false;
                    }
                    savedTasks =JSON.parse(savedTasks)

                    for (i = 0; i < savedTasks.length; i++){
                        // pass each task objet into createTaskEl()
                        createTaskEl(savedTasks[i]);
                    }
                }

    return actionContainerEl
}

FormEl.addEventListener("submit", taskFormHandler);
