class ExpenseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddExpense(this.handleAddExpense.bind(this));
        this.view.bindDeleteExpense(this.handleDeleteExpense.bind(this));

        this.updateView();
    }

    handleAddExpense(values) {
        this.model.addExpense(values.description, values.amount, values.category);
        this.view.clearInputs();
        this.updateView();
    }

    handleDeleteExpense(id) {
        this.model.deleteExpense(id);
        this.updateView();
    }

    updateView() {
        const expenses = this.model.getAllExpenses();
        const total = this.model.getTotal();
        this.view.displayExpenses(expenses);
        this.view.displayTotal(total);
    }
}

const app = new ExpenseController(new ExpenseModel(), new ExpenseView());