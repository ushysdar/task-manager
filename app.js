// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// Event listener
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener("click", addTodo) //If we click we add a Todo
todoList.addEventListener("click", deleteCheck)

// Functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    // This create a div 
    const todoDiv = document.createElement('div');
    // Add a class to it
    todoDiv.classList.add('todo')
        // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add to do  to local storage 
    saveLocalTodos(todoInput.value);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<img src="Untitled5.png" >';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<img src="dfqsdf.png">';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}


function deleteCheck(e) {
    const item = e.target;
    // Delete the to do
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function saveLocalTodos(todo) {
    //Check if I have already things
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo) {


        const todoDiv = document.createElement('div');
        // Add a class to it
        todoDiv.classList.add("todo")
            // Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // Check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<img src="Untitled5.png" >';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // Check delete button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<img src="dfqsdf.png">';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });
}


function removeLocalTodos(todo) {

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }

    console.log("deleted")

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}