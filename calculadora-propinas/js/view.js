class TipView {
    constructor() {
        this.billInput = document.getElementById('billAmount');
        this.customTipInput = document.getElementById('customTip');
        this.peopleInput = document.getElementById('peopleCount');
        this.tipButtons = document.querySelectorAll('.tip-btn');
        this.resetBtn = document.getElementById('resetBtn');
        
        this.tipAmountDisplay = document.getElementById('tipAmount');
        this.totalAmountDisplay = document.getElementById('totalAmount');
        this.perPersonDisplay = document.getElementById('perPerson');
    }

    displayResults(results) {
        this.tipAmountDisplay.textContent = `$${results.tip.toFixed(2)}`;
        this.totalAmountDisplay.textContent = `$${results.total.toFixed(2)}`;
        this.perPersonDisplay.textContent = `$${results.perPerson.toFixed(2)}`;
    }

    setActiveTipButton(percentage) {
        this.tipButtons.forEach(btn => {
            if (parseInt(btn.dataset.tip) === percentage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    clearInputs() {
        this.billInput.value = '';
        this.customTipInput.value = '';
        this.peopleInput.value = '1';
        this.tipButtons.forEach(btn => btn.classList.remove('active'));
    }

    bindBillChange(handler) {
        this.billInput.addEventListener('input', (e) => {
            handler(e.target.value);
        });
    }

    bindTipButton(handler) {
        this.tipButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tip = parseInt(e.target.dataset.tip);
                this.customTipInput.value = '';
                handler(tip);
            });
        });
    }

    bindCustomTip(handler) {
        this.customTipInput.addEventListener('input', (e) => {
            this.tipButtons.forEach(btn => btn.classList.remove('active'));
            handler(e.target.value);
        });
    }

    bindPeopleChange(handler) {
        this.peopleInput.addEventListener('input', (e) => {
            handler(e.target.value);
        });
    }

    bindReset(handler) {
        this.resetBtn.addEventListener('click', handler);
    }
}