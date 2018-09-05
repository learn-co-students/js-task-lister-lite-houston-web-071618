document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();

  let form = document.querySelector('#create-task-form')

  form.addEventListener("submit",function(e){
     e.preventDefault()
     let userText = document.querySelector('#new-user').value
     let taskText = document.querySelector('#new-task-description').value
     let selPrior = document.querySelector('#select-priority')
     document.querySelector('#tasks').innerHTML += `
      <li>
      <font color=${selPrior.options[selPrior.selectedIndex].id}>${taskText}</font>
      <br>${userText}
      <button data-description='${taskText}'>edit</button>
      <button data-description='${taskText}'>X</button>
      </li>
     `
  })

  document.getElementById("main-content").addEventListener("click", function(e) {
  	// e.target is the clicked element!
  	// If it was a list item
    if(e.target.innerText=== "edit" && e.target.nodeName == "BUTTON") {
  		// List item found!  Output the ID!
  		debugger
  	}
  	if(e.target.innerText=== "X" && e.target.nodeName == "BUTTON") {
  		// List item found!  Output the ID!
  		e.target.parentElement.remove()
  	}
  });

});
