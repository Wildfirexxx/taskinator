var FormEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

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

    // Create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give dive a class name
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML="<h3 class ='task-name'>" + taskDataObj.name + "</h3><span class = 'task-type'>"+ taskDataObj.type + "</span>";
    // add div with task info to the "li" listItemEl
    listItemEl.appendChild(taskInfoEl);

    // add entire list including div that contains task info
    tasksToDoEl.appendChild(listItemEl);

};


FormEl.addEventListener("submit", taskFormHandler);
