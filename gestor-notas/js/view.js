class NoteView {
    constructor() {
        this.titleInput = document.getElementById('title');
        this.contentInput = document.getElementById('content');
        this.categorySelect = document.getElementById('category');
        this.addBtn = document.getElementById('addBtn');
        this.searchInput = document.getElementById('searchInput');
        this.filterCategory = document.getElementById('filterCategory');
        this.notesGrid = document.getElementById('notesGrid');

        console.log('View initialized');
        console.log('Add button:', this.addBtn);
    }

    displayNotes(notes) {
        console.log('Displaying notes:', notes);

        if (notes.length === 0) {
            this.notesGrid.innerHTML = '<div class="empty-message">No hay notas</div>';
            return;
        }

        this.notesGrid.innerHTML = '';
        
        notes.forEach(note => {
            const div = document.createElement('div');
            div.className = 'note-card';
            div.innerHTML = `
                <div class="note-header">
                    <div class="note-title">${note.title}</div>
                    <div class="note-category">${note.category}</div>
                </div>
                <div class="note-content">${note.content}</div>
                <div class="note-footer">
                    <div class="note-date">${note.date}</div>
                    <button class="delete-btn" data-id="${note.id}">Eliminar</button>
                </div>
            `;
            this.notesGrid.appendChild(div);
        });
    }

    clearInputs() {
        this.titleInput.value = '';
        this.contentInput.value = '';
        this.categorySelect.selectedIndex = 0;
    }

    getInputValues() {
        const values = {
            title: this.titleInput.value.trim(),
            content: this.contentInput.value.trim(),
            category: this.categorySelect.value
        };
        console.log('Input values:', values);
        return values;
    }

    getSearchQuery() {
        return this.searchInput.value.trim();
    }

    getFilterCategory() {
        return this.filterCategory.value;
    }

    bindAddNote(handler) {
        this.addBtn.addEventListener('click', () => {
            console.log('Button clicked');
            const values = this.getInputValues();
            if (values.title && values.content) {
                console.log('Calling handler with:', values);
                handler(values);
            } else {
                alert('Por favor completa título y contenido');
            }
        });
    }

    bindDeleteNote(handler) {
        this.notesGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }

    bindSearch(handler) {
        this.searchInput.addEventListener('input', () => {
            handler();
        });
    }

    bindFilter(handler) {
        this.filterCategory.addEventListener('change', () => {
            handler();
        });
    }
}