class ReservationView {
    constructor() {
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.dateInput = document.getElementById('date');
        this.timeSelect = document.getElementById('time');
        this.serviceSelect = document.getElementById('service');
        this.reserveBtn = document.getElementById('reserveBtn');
        this.reservationsList = document.getElementById('reservationsList');
    }

    displayReservations(reservations) {
        if (reservations.length === 0) {
            this.reservationsList.innerHTML = '<div class="empty-message">No hay reservas</div>';
            return;
        }

        this.reservationsList.innerHTML = '';
        
        reservations.forEach(reservation => {
            const div = document.createElement('div');
            div.className = 'reservation-item';
            div.innerHTML = `
                <div class="reservation-header">
                    <div class="reservation-name">${reservation.name}</div>
                    <button class="cancel-btn" data-id="${reservation.id}">Cancelar</button>
                </div>
                <div class="reservation-details">
                    <div class="reservation-detail">📧 ${reservation.email}</div>
                    <div class="reservation-detail">📅 ${reservation.date}</div>
                    <div class="reservation-detail">🕐 ${reservation.time}</div>
                    <div class="reservation-detail">🏥 ${reservation.service}</div>
                </div>
            `;
            this.reservationsList.appendChild(div);
        });
    }

    clearInputs() {
        this.nameInput.value = '';
        this.emailInput.value = '';
        this.dateInput.value = '';
        this.timeSelect.selectedIndex = 0;
        this.serviceSelect.selectedIndex = 0;
    }

    getInputValues() {
        return {
            name: this.nameInput.value.trim(),
            email: this.emailInput.value.trim(),
            date: this.dateInput.value,
            time: this.timeSelect.value,
            service: this.serviceSelect.value
        };
    }

    showAlert(message) {
        alert(message);
    }

    bindReserve(handler) {
        this.reserveBtn.addEventListener('click', () => {
            const values = this.getInputValues();
            if (values.name && values.email && values.date && values.time) {
                handler(values);
            } else {
                this.showAlert('Por favor completa todos los campos');
            }
        });
    }

    bindCancel(handler) {
        this.reservationsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('cancel-btn')) {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }
}