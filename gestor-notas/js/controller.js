class NoteController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        console.log('Controller initialized');

        this.view.bindAddNote(this.handleAddNote.bind(this));
        this.view.bindDeleteNote(this.handleDeleteNote.bind(this));
        this.view.bindSearch(this.handleSearchFilter.bind(this));
        this.view.bindFilter(this.handleSearchFilter.bind(this));

        this.updateView();
    }

    handleAddNote(values) {
        console.log('handleAddNote called with:', values);
        this.model.addNote(values.title, values.content, values.category);
        this.view.clearInputs();
        this.updateView();
    }

    handleDeleteNote(id) {
        this.model.deleteNote(id);
        this.updateView();
    }

    handleSearchFilter() {
        const query = this.view.getSearchQuery();
        const category = this.view.getFilterCategory();
        
        let notes = this.model.getAllNotes();
        
        if (query) {
            notes = this.model.searchNotes(query);
        }
        
        if (category !== 'todas') {
            notes = notes.filter(note => note.category === category);
        }
        
        this.view.displayNotes(notes);
    }

    updateView() {
        const notes = this.model.getAllNotes();
        console.log('Updating view with notes:', notes);
        this.view.displayNotes(notes);
    }
}

const app = new NoteController(new NoteModel(), new NoteView());
console.log('App started');