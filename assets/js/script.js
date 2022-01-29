var FormEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is NUNU";
    tasksToDoEl.appendChild(listItemEl);
    console.log(event);
};
FormEl.addEventListener("submit", createTaskHandler);
