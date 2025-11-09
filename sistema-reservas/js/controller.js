class ReservationController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindReserve(this.handleReserve.bind(this));
        this.view.bindCancel(this.handleCancel.bind(this));

        this.updateView();
    }

    handleReserve(values) {
        if (this.model.isTimeAvailable(values.date, values.time)) {
            this.model.addReservation(
                values.name,
                values.email,
                values.date,
                values.time,
                values.service
            );
            this.view.clearInputs();
            this.view.showAlert('Reserva confirmada exitosamente');
            this.updateView();
        } else {
            this.view.showAlert('Este horario ya está reservado');
        }
    }

    handleCancel(id) {
        this.model.cancelReservation(id);
        this.updateView();
    }

    updateView() {
        const reservations = this.model.getAllReservations();
        this.view.displayReservations(reservations);
    }
}

const app = new ReservationController(new ReservationModel(), new ReservationView());