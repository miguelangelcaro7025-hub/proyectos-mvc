
class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;


        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindToggleTask(this.handleToggleTask.bind(this));
        this.view.bindDeleteTask(this.handleDeleteTask.bind(this));


        this.updateView();
    }


    handleAddTask(text) {
        this.model.addTask(text);
        this.view.clearInput();
        this.updateView();
    }


    handleToggleTask(id) {
        this.model.toggleTask(id);
        this.updateView();
    }


    handleDeleteTask(id) {
        this.model.deleteTask(id);
        this.updateView();
    }


    updateView() {
        const tasks = this.model.getAllTasks();
        this.view.displayTasks(tasks);
    }
}


const app = new TaskController(new TaskModel(), new TaskView());