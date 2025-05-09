// SIMPLE TODO LIST
// This is a simple todo list application that allows users to add, remove, and mark tasks as completed.

    let simpleTodoInput = document.getElementById("simple-todo-input");
    let simpleTodoList = document.getElementById("simple-todo-list");

    simpleTodoInput.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            addItem(this.value);       
            this.value = "";           
        }
    });


    let addItem = (simpleTodoInput) => {
        let simpleTodoListItem = document.createElement("li");
        simpleTodoListItem.innerHTML = `${simpleTodoInput}<i></i>`;

            // Mark as completed functionality
            simpleTodoListItem.addEventListener("click", function () {
                this.classList.toggle('completed');
            });

            // Delete button functionality
            simpleTodoListItem.querySelector("i").addEventListener("click", 
                function () {
                    simpleTodoListItem.remove();
            })

        simpleTodoList.appendChild(simpleTodoListItem);
    }


// TODO LIST WITH PROGRESS BAR

    const progressTodoInput = document.getElementById("progress-todo-input");
    const progressTodoSubmitBtn = document.getElementById("progress-todo-submit-btn");
    const progressTodoList = document.getElementById("progress-todo-list");

    const addTask = () => {
        const taskText = progressTodoInput.value;
        if (!taskText){
            return;
        } 

        const progressTodoListItem = document.createElement('li');
        progressTodoListItem.innerHTML = `${taskText}<span>Edit</span><i></i>`;
        progressTodoList.appendChild(progressTodoListItem);
        progressTodoInput.value = "";

         // Mark as completed functionality
         progressTodoListItem.addEventListener("click", function (event) {
            const spanClick = document.querySelector("span");
            if (event.target.tagName == spanClick.tagName) {
                return;
            } else {
                this.classList.toggle('completed');
            }
        });

        // Delete button functionality
        progressTodoListItem.querySelector("i").addEventListener("click", 
            function () {
                progressTodoListItem.remove();
        })

        // Edit button functionality
        const editButton = progressTodoListItem.querySelector("span");
        editButton.addEventListener("click", () => {
            const currentText = progressTodoListItem.childNodes[0].nodeValue.trim();
            progressTodoInput.value = currentText;
            progressTodoInput.focus();
            progressTodoListItem.remove();

        });

    };

    progressTodoSubmitBtn.addEventListener("click", addTask);
    progressTodoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });


    // Progress bar functionality
    const progressBar = document.getElementById("progress");
    const progressNumbers = document.getElementById("numbers");

    const updateProgress = () => {
        const totalTasks = progressTodoList.getElementsByTagName("li").length;
        const completedTasks = progressTodoList.getElementsByClassName("completed").length;

        progressNumbers.textContent = `${completedTasks} / ${totalTasks}`;
        progressBar.style.width = totalTasks > 0 ? `${(completedTasks / totalTasks) * 100}%` : "0%";
    };

    // Update progress whenever a task is added, removed, or toggled
    progressTodoList.addEventListener("click", updateProgress);
    progressTodoSubmitBtn.addEventListener("click", updateProgress);
    progressTodoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            updateProgress();
        }
    });
