const TaskList = (() => {
    let taskListId = 0;
    return class {
        constructor() {
            this.tasks = []
        }

        createNewTask(description) {
            const newTask = new Task(description)
            this.tasks.push(newTask)
        }

        renderAllTasks() {
            // let newUl = document.createElement('ul')
            // let liArray = this.tasks.map(task => task.render())
            // liArray.forEach(li => {
            //     newUl.append(li)
            // });
            // // debugger
            // return newUl

            return this.tasks.map((task) => task.render()).join("");
        }

        deleteTask(taskId) {
            this.tasks = this.tasks.filter(task => {
                return task.id !== taskId
            })
        }
    }

})();


