import './styles.css';
import { popUpx } from './popup.js'
import { createTask } from './createTask.js';

//declare class
class Todo {

  static tasks = [];
  static taskIDCounter = 0;
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.taskID = Todo.taskIDCounter;
    Todo.taskIDCounter++;
    this.addTask();
  }

  static renderTasks() {
    content.textContent = "";
    Todo.tasks.forEach((task) => {
      const note = document.createElement("div");
      note.classList.add("task-item");

      const titleItem = document.createElement("div");
      titleItem.classList.add("titleItem");
      titleItem.textContent = task.title;
      note.appendChild(titleItem);

      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");

      const descriptionItem = document.createElement("div");
      descriptionItem.classList.add("descriptionItem");
      descriptionItem.textContent = task.description;
      wrapper.appendChild(descriptionItem);

      const dateItem = document.createElement("div");
      dateItem.classList.add("dateItem");
      dateItem.textContent = task.date;
      wrapper.appendChild(dateItem);

      const prioItem = document.createElement("div");
      prioItem.classList.add("prioItem");
      prioItem.textContent = task.priority;
      wrapper.appendChild(prioItem);

      if (task.priority === "High") {
        note.style.borderLeft = "5px solid red";
      }
      if (task.priority === "Medium") {
        note.style.borderLeft = "5px solid yellow";
      }
      if (task.priority === "Low") {
        note.style.borderLeft = "5px solid green";
      }
      const ID = document.createElement("div");
      ID.textContent = task.taskID;
      wrapper.appendChild(ID);
      task.delBtn(wrapper, ID);
      note.appendChild(wrapper);
      task.expandTask(note, wrapper);
      content.appendChild(note);
    });
  }

  expandTask(note, wrapper) {
      note.addEventListener("click", function(){
      note.style.position = "fixed";
      note.style.top = "50%";
      note.style.left = "50%";
      note.style.transform = "translate(-50%, -50%)";
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      function closeZoomedTask(event) {
        if(event.target !== note) {
          note.style.position = "";
          note.style.top = "";
          note.style.left = "";
          note.style.transform = "";
          wrapper.style.display = "none";
        }
      }
      window.addEventListener("click", closeZoomedTask);
  })
  }

  addTask() {
    Todo.tasks.push(this);
  }

  delBtn(wrapper, ID) {
    if(Todo.tasks.length === 0) {
      content.textContent = "";
    }
    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.textContent = "Delete";
    wrapper.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
      Todo.tasks = Todo.tasks.filter(task => task.taskID !== parseInt(ID.textContent));
      Todo.renderTasks();
    });
  }

  static orderTasks() {
    reorderBtn.addEventListener("click", function(){
    const order = { "High": 0, "Medium": 1, "Low": 2, "": 3 };
    Todo.tasks.sort((a, b) => order[a.priority] - order[b.priority]);
    Todo.renderTasks();
  })
}

}
//global query selectors
export const content = document.querySelector(".content");
const reorderBtn = document.querySelector(".reorderBtn");

//button add to array
const addTaskBtn = document.querySelector(".addTaskBtn");
addTaskBtn.addEventListener("click", function(){
  const { inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, create, dueDate, close, popUp, inputDate } = popUpx(content);
  createTask(inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, Todo, content, create, dueDate, close, popUp, inputDate)
});
