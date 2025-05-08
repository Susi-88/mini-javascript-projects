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

            simpleTodoListItem.addEventListener("click", function () {
                this.classList.toggle('completed');
            });

            simpleTodoListItem.querySelector("i").addEventListener("click", 
                function () {
                    simpleTodoListItem.remove();
            })

            simpleTodoList.appendChild(simpleTodoListItem);
    }
