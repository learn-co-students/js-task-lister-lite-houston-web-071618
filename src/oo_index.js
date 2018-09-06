
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();


// - users should be able to type a task into the input field
// - users should be able to click some form of a submit button
// - the task string that the user provided should appear on the DOM after the submit button has been activated

	let taskForm = document.getElementById('create-task-form')

	taskForm.addEventListener('submit', event => {
		event.preventDefault();
		let newTask = document.getElementById('new-task-description').value

		if (newTask) {
			document.getElementById('tasks').innerHTML += `
				<li>
					${newTask}
					<button>DELETE</button>
				</li>
			`
		}
	})

	let listUl = document.querySelector('#list')

	listUl.addEventListener('click', event => {
		event.preventDefault();
		event.target.parentElement.remove();
		// let newTask = document.getElementById('new-task-description').value

		// if (document.getElementById('${newTask}')) {
		// 	document.getElementById('${newTask}').remove()
		// }
	})

});
