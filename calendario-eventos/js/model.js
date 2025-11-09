class EventModel {
    constructor() {
        this.events = [];
        this.nextId = 1;
    }

    addEvent(title, date, time, description) {
        const event = {
            id: this.nextId++,
            title: title,
            date: date,
            time: time,
            description: description
        };
        this.events.push(event);
        this.sortEvents();
        return event;
    }

    updateEvent(id, title, date, time, description) {
        const event = this.events.find(e => e.id === id);
        if (event) {
            event.title = title;
            event.date = date;
            event.time = time;
            event.description = description;
            this.sortEvents();
        }
    }

    deleteEvent(id) {
        this.events = this.events.filter(e => e.id !== id);
    }

    sortEvents() {
        this.events.sort((a, b) => {
            const dateA = new Date(a.date + ' ' + a.time);
            const dateB = new Date(b.date + ' ' + b.time);
            return dateA - dateB;
        });
    }

    getAllEvents() {
        return this.events;
    }
}