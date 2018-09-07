
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  const taskForm = document.getElementById('create-task-form');
  const taskUL = document.getElementById('tasks');
  
  function addTask(e) {
    e.preventDefault()
    let taskName = e.target.children[1].value
    createTaskElement(taskName)
    e.target.children[1].value = ""
  }
  
  function createTaskElement(taskString) {
    let newTaskHTML = `<li>${taskString} <button data-id="${taskString}">X</button></li>`
    taskUL.innerHTML += newTaskHTML
  }
  
  function deleteTask(e) {
    let deleteButton = e.target.dataset.id
    
    if (deleteButton) {
      let taskToDelete = e.target.parentElement
      taskToDelete.remove()
    }
  }
  
  taskForm.addEventListener('submit', e => addTask(e))
  taskUL.addEventListener('click', e => deleteTask(e))
});
