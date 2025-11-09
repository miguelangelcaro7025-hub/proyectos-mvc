class ExpenseView {
    constructor() {
        this.descriptionInput = document.getElementById('description');
        this.amountInput = document.getElementById('amount');
        this.categorySelect = document.getElementById('category');
        this.addBtn = document.getElementById('addBtn');
        this.expensesList = document.getElementById('expensesList');
        this.totalAmount = document.getElementById('totalAmount');
    }

    displayExpenses(expenses) {
        this.expensesList.innerHTML = '';
        
        expenses.forEach(expense => {
            const div = document.createElement('div');
            div.className = 'expense-item';
            div.innerHTML = `
                <div class="expense-info">
                    <div class="expense-description">${expense.description}</div>
                    <div class="expense-category">${expense.category}</div>
                </div>
                <div class="expense-amount">$${expense.amount.toFixed(2)}</div>
                <button class="delete-btn" data-id="${expense.id}">Eliminar</button>
            `;
            this.expensesList.appendChild(div);
        });
    }

    displayTotal(total) {
        this.totalAmount.textContent = total.toFixed(2);
    }

    clearInputs() {
        this.descriptionInput.value = '';
        this.amountInput.value = '';
        this.categorySelect.selectedIndex = 0;
    }

    getInputValues() {
        return {
            description: this.descriptionInput.value.trim(),
            amount: this.amountInput.value,
            category: this.categorySelect.value
        };
    }

    bindAddExpense(handler) {
        this.addBtn.addEventListener('click', () => {
            const values = this.getInputValues();
            if (values.description && values.amount) {
                handler(values);
            }
        });
    }

    bindDeleteExpense(handler) {
        this.expensesList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = parseInt(e.target.dataset.id);
                handler(id);
            }
        });
    }
}