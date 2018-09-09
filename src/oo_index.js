// const taskList = new TaskList();

console.log("DOM loaded");

const taskLister = document.getElementById("main-content");
const taskListerForm = document.getElementById("create-task-form");

taskLister.addEventListener("submit", addTask);

function addTask(event) {
	event.preventDefault();
	const taskDesc = document.getElementById("new-task-description").value;
	const taskList = document.getElementById("tasks");
	const listItem = document.createElement("li");
	listItem.innerHTML = `
		${taskDesc}
		<button id="deleteBtn">X</button>
		`
	if (taskDesc === "") {
		alert("Please enter a task description!");
	} else 
	taskList.append(listItem);
}

taskLister.addEventListener("click", deleteTask);



// const deleteBtn = document.getElementById("deleteBtn");

// if (deleteBtn) {
// 	document.deleteBtn.addEventListener("click", deleteTask);
// }

function deleteTask(event) {
	// debugger
	const deleteBtn = (event.target.id === "deleteBtn")
	if (deleteBtn) {
	event.target.parentElement.remove();
}
}