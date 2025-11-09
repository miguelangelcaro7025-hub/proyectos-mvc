class TipModel {
    constructor() {
        this.billAmount = 0;
        this.tipPercentage = 15;
        this.peopleCount = 1;
    }

    setBillAmount(amount) {
        this.billAmount = parseFloat(amount) || 0;
    }

    setTipPercentage(percentage) {
        this.tipPercentage = parseFloat(percentage) || 0;
    }

    setPeopleCount(count) {
        this.peopleCount = parseInt(count) || 1;
    }

    calculateTip() {
        return (this.billAmount * this.tipPercentage) / 100;
    }

    calculateTotal() {
        return this.billAmount + this.calculateTip();
    }

    calculatePerPerson() {
        return this.calculateTotal() / this.peopleCount;
    }

    reset() {
        this.billAmount = 0;
        this.tipPercentage = 15;
        this.peopleCount = 1;
    }

    getResults() {
        return {
            tip: this.calculateTip(),
            total: this.calculateTotal(),
            perPerson: this.calculatePerPerson()
        };
    }
}