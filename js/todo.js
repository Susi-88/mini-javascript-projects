 function addTodo(event) {

    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');

    if (todoInput.value === '') {
        return;
    } else {
        todoList.innerHTML += 
        `<li>
            <span class="todo-text">${todoInput.value}</span>
            <div>
                <button class="btn-primer" type="button" name="todo-completed" onclick="todoCompleted(this)">Completed</button>
                <button class="btn-primer" type="button" name="todo-delete-btn" onclick="todoDelete(this)">Delete</button>
            </div>
        </li>`;

        todoInput.value = '';
    }
    
}

function todoCompleted(button) {
    let taskCompleted = button.closest('li');
    taskCompleted.classList.add('todo-completed');
}

function todoDelete(button) {
    let taskDelete = button.closest('li');
    taskDelete.remove();
}
