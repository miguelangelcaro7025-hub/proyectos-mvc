class TipController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindBillChange(this.handleBillChange.bind(this));
        this.view.bindTipButton(this.handleTipButton.bind(this));
        this.view.bindCustomTip(this.handleCustomTip.bind(this));
        this.view.bindPeopleChange(this.handlePeopleChange.bind(this));
        this.view.bindReset(this.handleReset.bind(this));

        this.updateView();
    }

    handleBillChange(amount) {
        this.model.setBillAmount(amount);
        this.updateView();
    }

    handleTipButton(percentage) {
        this.model.setTipPercentage(percentage);
        this.view.setActiveTipButton(percentage);
        this.updateView();
    }

    handleCustomTip(percentage) {
        this.model.setTipPercentage(percentage);
        this.updateView();
    }

    handlePeopleChange(count) {
        this.model.setPeopleCount(count);
        this.updateView();
    }

    handleReset() {
        this.model.reset();
        this.view.clearInputs();
        this.view.setActiveTipButton(15);
        this.updateView();
    }

    updateView() {
        const results = this.model.getResults();
        this.view.displayResults(results);
    }
}

const app = new TipController(new TipModel(), new TipView());