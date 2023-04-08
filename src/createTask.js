function createTask(inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, Todo, content, create, dueDate, close, popUp, inputDate) {
    create.addEventListener("click", function(){
        const title = inputSubject.value;
        const description = inputDescription.value;
        const date = dueDate.textContent + " " + inputDate.value;
        let priority = null;
        if(inputPriority.checked) {
            priority = "High";
        } else if(inputPriority2.checked) {
            priority = "Medium";
        } else if(inputPriority3.checked) {
            priority = "Low";
        } else {
            priority = "";
        }
        const taskOne = new Todo(title, description, date, priority);
        content.textContent = "";
        for(let i = 0; i < Todo.tasks.length; i++) {
            if(inputSubject.value === "") {
                Todo.tasks[i].title = "NoSubject";
            } 
            const note = document.createElement("div");
            note.classList.add("task-item");

            const titleItem = document.createElement("div");
            titleItem.classList.add("titleItem");
            titleItem.textContent = `${Todo.tasks[i].title}`;
            note.appendChild(titleItem);

            const wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");

            const descriptionItem = document.createElement("div");
            descriptionItem.classList.add("descriptionItem");
            descriptionItem.textContent = `${Todo.tasks[i].description}`;
            wrapper.appendChild(descriptionItem);

            const dateItem = document.createElement("div");
            dateItem.classList.add("dateItem");
            dateItem.textContent = `${Todo.tasks[i].date}`;
            wrapper.appendChild(dateItem);

            const prioItem = document.createElement("div");
            prioItem.classList.add("prioItem");
            prioItem.textContent = `${Todo.tasks[i].priority}`;
            wrapper.appendChild(prioItem);

            note.appendChild(wrapper);
            if(Todo.tasks[i].priority === "High") {
                note.style.borderLeft = "5px solid red";
            }
            if(Todo.tasks[i].priority === "Medium") {
                note.style.borderLeft = "5px solid yellow";
            }
            if(Todo.tasks[i].priority === "Low") {
                note.style.borderLeft = "5px solid green";
            }
            taskOne.expandTask(note, wrapper);
            content.appendChild(note);
        }
        popUp.remove();
    })

    close.addEventListener("click", function() {
        content.textContent = "";
        for(let i = 0; i < Todo.tasks.length; i++) {
            const note = document.createElement("div");
            note.classList.add("task-item");

            const titleItem = document.createElement("div");
            titleItem.classList.add("titleItem");
            titleItem.textContent = `${Todo.tasks[i].title}`;
            note.appendChild(titleItem);

            const wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");

            const descriptionItem = document.createElement("div");
            descriptionItem.classList.add("descriptionItem");
            descriptionItem.textContent = `${Todo.tasks[i].description}`;
            wrapper.appendChild(descriptionItem);

            const dateItem = document.createElement("div");
            dateItem.classList.add("dateItem");
            dateItem.textContent = `${Todo.tasks[i].date}`;
            wrapper.appendChild(dateItem);

            const prioItem = document.createElement("div");
            prioItem.classList.add("prioItem");
            prioItem.textContent = `${Todo.tasks[i].priority}`;
            wrapper.appendChild(prioItem);

            note.appendChild(wrapper);
            content.appendChild(note);
        }
    })
}

export {
    createTask
}