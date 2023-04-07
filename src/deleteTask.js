function deleteTask(taskID, Todo) {
    for(let i = 0; i < Todo.tasks.length; i++) {
        if(taskID === Todo.tasks[i].taskID) {
            Todo.tasks.splice(i, 1);
            break;
        }
    }
}