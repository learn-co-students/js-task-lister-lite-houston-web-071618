document.addEventListener("DOMContentLoaded", () => {
  
  const listenHere = document.getElementById("create-task-form")

  listenHere.addEventListener('submit', e => {
    e.preventDefault()
    let listContainer = document.getElementById("tasks")
    let taskInput = document.getElementById("new-task-description").value
    let taskEl = document.createElement("li")
    let taskForm = document.getElementById("create-task-form")

    taskEl.innerHTML = `
      ${taskInput} <input id="delete-btn" type="submit" value="x"/>
    `

    listContainer.appendChild(taskEl)
    taskForm.reset()

    let deleteBtn = document.querySelector("#delete-btn")
    deleteBtn.addEventListener("click", e => {
      e.target.parentElement.remove() 
    })
    //delete only works on first li, no subsequent lis
  })




})
