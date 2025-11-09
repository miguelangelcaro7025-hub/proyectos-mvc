class ExpenseModel {
    constructor() {
        this.expenses = [];
        this.nextId = 1;
    }

    addExpense(description, amount, category) {
        const expense = {
            id: this.nextId++,
            description: description,
            amount: parseFloat(amount),
            category: category
        };
        this.expenses.push(expense);
        return expense;
    }

    deleteExpense(id) {
        this.expenses = this.expenses.filter(exp => exp.id !== id);
    }

    getTotal() {
        return this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    }

    getAllExpenses() {
        return this.expenses;
    }
}