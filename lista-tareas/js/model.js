
class TaskModel {
    constructor() {
        
        this.tasks = [];
        this.nextId = 1;
    }


    addTask(text) {
        const task = {
            id: this.nextId++,
            text: text,
            completed: false
        };
        this.tasks.push(task);
        return task;
    }


    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }


    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }


    getAllTasks() {
        return this.tasks;
    }
}