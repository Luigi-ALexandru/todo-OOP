export let taskOne = null;
import { saveToLocalStorage } from "./saveToStorage";

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
      taskOne = new Todo(title, description, date, priority);
      saveToLocalStorage(Todo);
      content.textContent = "";
      for(let i = 0; i < Todo.tasks.length; i++) {
          if(inputSubject.value === "") {
              Todo.tasks[Todo.tasks.length -1].title = "NoSubject";
          } 
          const note = document.createElement("div");
          note.classList.add("task-item");

          const titleItem = document.createElement("div");
          titleItem.classList.add("titleItem");
          titleItem.textContent = `${Todo.tasks[i].title}`;
          note.appendChild(titleItem);

          const hr = document.createElement("hr");
          note.appendChild(hr);

          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");

          const descriptionItem = document.createElement("div");
          descriptionItem.classList.add("descriptionItem");
          descriptionItem.textContent = `${Todo.tasks[i].description}`;
          wrapper.appendChild(descriptionItem);

          const hr2 = document.createElement("hr");
          wrapper.appendChild(hr2);

          const dateItem = document.createElement("div");
          dateItem.classList.add("dateItem");
          dateItem.textContent = `${Todo.tasks[i].date}`;
          wrapper.appendChild(dateItem);

          const hr3 = document.createElement("hr");
          wrapper.appendChild(hr3);

          const prioItem = document.createElement("div");
          prioItem.classList.add("prioItem");
          prioItem.textContent = `${Todo.tasks[i].priority}`;
          wrapper.appendChild(prioItem);

          const hr4 = document.createElement("hr");
          wrapper.appendChild(hr4);

          if(Todo.tasks[i].priority === "High") {
              note.style.borderLeft = "5px solid red";
          }
          if(Todo.tasks[i].priority === "Medium") {
              note.style.borderLeft = "5px solid yellow";
          }
          if(Todo.tasks[i].priority === "Low") {
              note.style.borderLeft = "5px solid green";
          }
          const ID = document.createElement("div");
          ID.textContent = Todo.tasks[i].taskID;
          wrapper.appendChild(ID);
          Todo.prototype.delBtn.call(Todo.tasks[i], wrapper, ID);
          note.appendChild(wrapper);
          Todo.expandTask(Todo.tasks[i], note, wrapper);
          content.appendChild(note);
          Todo.orderTasks();
      }
      popUp.style.display = "none";
  })

  close.addEventListener("click", function() {
    if(taskOne) {
      content.textContent = "";
      for(let i = 0; i < Todo.tasks.length; i++) {
          if(inputSubject.value === "") {
            Todo.tasks[Todo.tasks.length -1].title = "NoSubject";
        } 
          const note = document.createElement("div");
          note.classList.add("task-item");

          const titleItem = document.createElement("div");
          titleItem.classList.add("titleItem");
          titleItem.textContent = `${Todo.tasks[i].title}`;
          note.appendChild(titleItem);

          const hr = document.createElement("hr");
          note.appendChild(hr);

          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");

          const descriptionItem = document.createElement("div");
          descriptionItem.classList.add("descriptionItem");
          descriptionItem.textContent = `${Todo.tasks[i].description}`;
          wrapper.appendChild(descriptionItem);

          const hr2 = document.createElement("hr");
          wrapper.appendChild(hr2);

          const dateItem = document.createElement("div");
          dateItem.classList.add("dateItem");
          dateItem.textContent = `${Todo.tasks[i].date}`;
          wrapper.appendChild(dateItem);

          const hr3 = document.createElement("hr");
          wrapper.appendChild(hr3);

          const prioItem = document.createElement("div");
          prioItem.classList.add("prioItem");
          prioItem.textContent = `${Todo.tasks[i].priority}`;
          wrapper.appendChild(prioItem);

          const hr4 = document.createElement("hr");
          wrapper.appendChild(hr4);

          if(Todo.tasks[i].priority === "High") {
              note.style.borderLeft = "5px solid red";
          }
          if(Todo.tasks[i].priority === "Medium") {
              note.style.borderLeft = "5px solid yellow";
          }
          if(Todo.tasks[i].priority === "Low") {
              note.style.borderLeft = "5px solid green";
          }
          const ID = document.createElement("div");
          ID.textContent = Todo.tasks[i].taskID;
          wrapper.appendChild(ID);
          Todo.prototype.delBtn.call(Todo.tasks[i], wrapper, ID);
          note.appendChild(wrapper);
          Todo.expandTask(Todo.tasks[i], note, wrapper);
          content.appendChild(note);
          Todo.orderTasks();
      }
    }
    popUp.style.display = "none";
  })
}



export {
  createTask
}