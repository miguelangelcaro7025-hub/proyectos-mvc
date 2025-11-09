
class TaskView {
    constructor() {
        this.taskList = document.getElementById('taskList');
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
    }

  
    displayTasks(tasks) {

        this.taskList.innerHTML = '';


        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
                <span class="task-text">${task.text}</span>
                <button class="delete-btn" data-id="${task.id}">Eliminar</button>
            `;
            this.taskList.appendChild(li);
        });
    }


    clearInput() {
        this.taskInput.value = '';
    }

    getInputValue() {
        return this.taskInput.value.trim();
    }


    bindAddTask(handler) {
        this.addBtn.addEventListener('click', () => {
            const text = this.getInputValue();
            if (text) {
                handler(text);
            }
        });

 
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const text = this.getInputValue();
                if (text) {
                    handler(text);
                }
            }
        });
    }

 
    bindToggleTask(handler) {
        this.taskList.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }

    bindDeleteTask(handler) {
        this.taskList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }
}