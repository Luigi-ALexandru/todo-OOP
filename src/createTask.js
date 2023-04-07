function createTask(inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, Todo, content, create, divDate) {
    create.addEventListener("click", function(){
        const title = inputSubject.value;
        const description = inputDescription.value;
        const date = divDate.textContent;
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