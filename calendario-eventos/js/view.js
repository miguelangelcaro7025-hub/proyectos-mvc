class EventView {
    constructor() {
        this.titleInput = document.getElementById('eventTitle');
        this.dateInput = document.getElementById('eventDate');
        this.timeInput = document.getElementById('eventTime');
        this.descriptionInput = document.getElementById('eventDescription');
        this.addBtn = document.getElementById('addBtn');
        this.eventsList = document.getElementById('eventsList');
        this.editingId = null;
    }

    displayEvents(events) {
        if (events.length === 0) {
            this.eventsList.innerHTML = '<div class="empty-message">No hay eventos programados</div>';
            return;
        }

        this.eventsList.innerHTML = '';
        
        events.forEach(event => {
            const div = document.createElement('div');
            div.className = 'event-card';
            div.innerHTML = `
                <div class="event-header">
                    <div class="event-title">${event.title}</div>
                    <div class="event-actions">
                        <button class="edit-btn" data-id="${event.id}">Editar</button>
                        <button class="delete-btn" data-id="${event.id}">Eliminar</button>
                    </div>
                </div>
                <div class="event-datetime">
                    <span>📅 ${event.date}</span>
                    <span>🕐 ${event.time}</span>
                </div>
                <div class="event-description">${event.description}</div>
            `;
            this.eventsList.appendChild(div);
        });
    }

    clearInputs() {
        this.titleInput.value = '';
        this.dateInput.value = '';
        this.timeInput.value = '';
        this.descriptionInput.value = '';
        this.editingId = null;
        this.addBtn.textContent = 'Agregar Evento';
    }

    setEditMode(event) {
        this.editingId = event.id;
        this.titleInput.value = event.title;
        this.dateInput.value = event.date;
        this.timeInput.value = event.time;
        this.descriptionInput.value = event.description;
        this.addBtn.textContent = 'Actualizar Evento';
    }

    getInputValues() {
        return {
            id: this.editingId,
            title: this.titleInput.value.trim(),
            date: this.dateInput.value,
            time: this.timeInput.value,
            description: this.descriptionInput.value.trim()
        };
    }

    bindAddOrUpdate(handler) {
        this.addBtn.addEventListener('click', () => {
            const values = this.getInputValues();
            if (values.title && values.date && values.time) {
                handler(values);
            }
        });
    }

    bindEdit(handler) {
        this.eventsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('edit-btn')) {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }

    bindDelete(handler) {
        this.eventsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }
}