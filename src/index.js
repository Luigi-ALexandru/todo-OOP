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
    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.textContent = "Delete";
    wrapper.appendChild(delBtn);

    delBtn.addEventListener("click", function(){
      for(let i = 0; i < Todo.tasks.length; i++) {
        if(Todo.tasks[i].taskID === ID) {
          Todo.tasks.splice(Todo.tasks.indexOf(Todo.tasks[i].taskID), 1);
        }
      }
      console.log(Todo.tasks.length);
    })
  }
}

//global query selectors
const content = document.querySelector(".content");

//button add to array
const addTaskBtn = document.querySelector(".addTaskBtn");
addTaskBtn.addEventListener("click", function(){
  const { inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, create, dueDate, close, popUp, inputDate } = popUpx(content);
  createTask(inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, Todo, content, create, dueDate, close, popUp, inputDate)
});