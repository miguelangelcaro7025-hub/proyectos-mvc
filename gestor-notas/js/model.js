class NoteModel {
    constructor() {
        this.notes = [];
        this.nextId = 1;
    }

    addNote(title, content, category) {
        const note = {
            id: this.nextId++,
            title: title,
            content: content,
            category: category,
            date: new Date().toLocaleDateString()
        };
        this.notes.push(note);
        return note;
    }

    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }

    searchNotes(query) {
        if (!query) return this.notes;
        return this.notes.filter(note => 
            note.title.toLowerCase().includes(query.toLowerCase()) ||
            note.content.toLowerCase().includes(query.toLowerCase())
        );
    }

    filterByCategory(category) {
        if (category === 'todas') return this.notes;
        return this.notes.filter(note => note.category === category);
    }

    getAllNotes() {
        return this.notes;
    }
}