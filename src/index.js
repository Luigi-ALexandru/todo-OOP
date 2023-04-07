import './styles.css';
import { popUp } from './popup.js'
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

  popUpTask() {
    //callback function
  }

  addTask() {
    Todo.tasks.push(this);
  }

  deleteTask() {
    //code here
  }
}

//global query selectors
const content = document.querySelector(".content");

//button add to array
const addTaskBtn = document.querySelector(".addTaskBtn");
addTaskBtn.addEventListener("click", function(){
  const { inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, create, divDate } = popUp(content);
  createTask(inputSubject, inputDescription, inputPriority, inputPriority2, inputPriority3, Todo, content, create, divDate)
});



