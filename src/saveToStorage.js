function saveToLocalStorage(Todo) {
    for(let i = 0; i < Todo.tasks.length; i++) {
        localStorage.setItem(`tasks_${i}`, JSON.stringify(Todo.tasks[i]));
    }
}

function loadFromLocalStorage(Todo) {
    let maxTaskID = -1;
    for (let i = 0; i < localStorage.length; i++) {
      const storedTask = JSON.parse(localStorage.getItem(`tasks_${i}`));
      if (storedTask) {
        Todo.tasks.push(storedTask);
        if (storedTask.taskID > maxTaskID) {
          maxTaskID = storedTask.taskID;
        }
      }
    }
    Todo.taskIDCounter = maxTaskID + 1;
  }

  function deleteFromLocalStorage(Todo, taskID) {
    for(let i = 0; i < localStorage.length; i++) {
        const storageKey = `tasks_${i}`;
        const storedTask = JSON.parse(localStorage.getItem(storageKey));
        if(storedTask && storedTask.taskID === taskID) {
            localStorage.removeItem(storageKey);
        }
    }
}

export {
    saveToLocalStorage,
    loadFromLocalStorage,
    deleteFromLocalStorage
}