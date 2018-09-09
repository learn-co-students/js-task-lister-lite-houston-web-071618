// let taskDiv = document.querySelector('#list')

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.querySelector('#create-task-form')

  const ulTag = document.querySelector('#tasks')

  const renderApp = () => {
    ulTag.innerHTML = taskList.renderAllTasks()

    // taskUl.innerHTML = ''
    // taskArray = taskList.renderAllTasks()
    // taskArray.forEach(task => {
    //   taskUl.appendChild(task)
    // })

  };
  // ul.innerHTML = taskList.renderAllTasks
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newDescription = event.target.querySelector('#new-task-description').value

    if (newDescription) {
      taskList.createNewTask(newDescription)
      renderApp()
    }
  })

  ulTag.addEventListener('click', (event) => {
    // debugger
    if (event.target.nodeName === "BUTTON") {
      taskList.deleteTask(parseInt(event.target.dataset.taskId))

      renderApp()
    }
  })




});


