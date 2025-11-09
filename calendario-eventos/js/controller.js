class EventController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddOrUpdate(this.handleAddOrUpdate.bind(this));
        this.view.bindEdit(this.handleEdit.bind(this));
        this.view.bindDelete(this.handleDelete.bind(this));

        this.updateView();
    }

    handleAddOrUpdate(values) {
        if (values.id) {
            this.model.updateEvent(values.id, values.title, values.date, values.time, values.description);
        } else {
            this.model.addEvent(values.title, values.date, values.time, values.description);
        }
        this.view.clearInputs();
        this.updateView();
    }

    handleEdit(id) {
        const event = this.model.getAllEvents().find(e => e.id === id);
        if (event) {
            this.view.setEditMode(event);
        }
    }

    handleDelete(id) {
        this.model.deleteEvent(id);
        this.updateView();
    }

    updateView() {
        const events = this.model.getAllEvents();
        this.view.displayEvents(events);
    }
}

const app = new EventController(new EventModel(), new EventView());