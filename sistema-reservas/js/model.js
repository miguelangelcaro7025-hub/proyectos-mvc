class ReservationModel {
    constructor() {
        this.reservations = [];
        this.nextId = 1;
    }

    addReservation(name, email, date, time, service) {
        const reservation = {
            id: this.nextId++,
            name: name,
            email: email,
            date: date,
            time: time,
            service: service
        };
        this.reservations.push(reservation);
        return reservation;
    }

    cancelReservation(id) {
        this.reservations = this.reservations.filter(res => res.id !== id);
    }

    getAllReservations() {
        return this.reservations;
    }

    isTimeAvailable(date, time) {
        return !this.reservations.some(res => res.date === date && res.time === time);
    }
}