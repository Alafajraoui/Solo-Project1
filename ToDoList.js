var taskToDo = document.getElementById("taskInput");
var addTodo = document.getElementById("addButton");
var todoList = $(".container");

addTodo.addEventListener("click", function () {
    
   
    });

function addTask() {
   
        var listItem = $("<li>");  // first i Created a new list item
   
        var taskText = $("<span>").text(taskToDo.value);   // Creating a span tag for the task text using jQuery

        var completeButton = $("<button>").text('Complete');   // Creating buttons for marking as complete and removing the task using jQuery
        completeButton.on('click', function () {
            listItem.toggleClass('completed');
        });
        var removeButton = $("<button>").text('Remove');
        removeButton.on('click', function () {
            listItem.remove();
        });
 


if(taskToDo.value===''){
    alert('Plz enter a task')
}
else{

    listItem.append(taskText, completeButton, removeButton);
    
    todoList.append(listItem);
      
    
    taskToDo.value = '';  // and last we have to clear the input box
}


    }





  
