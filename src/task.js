const Task = (() => {
    let taskId = 0;
    return class {
        constructor(description) {
            this.id = ++taskId
            this.description = description
        }

        render() {
            // let li = document.createElement('li')
            // let button = document.createElement('button')
            // li.innerHTML = this.description
            // button.setAttribute('data-task-id', this.id)
            // button.innerText = 'X'
            // li.appendChild(button)
            // return li

            return `
      <li>
        ${this.description}
        <button data-task-id="${this.id}">X</button>
      </li>
      `;
        }
    }
})();

