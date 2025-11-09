class PasswordController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindLengthChange(this.handleLengthChange.bind(this));
        this.view.bindCheckboxChange(this.handleCheckboxChange.bind(this));
        this.view.bindGenerate(this.handleGenerate.bind(this));
        this.view.bindCopy(this.handleCopy.bind(this));

        this.generateInitialPassword();
    }

    generateInitialPassword() {
        const password = this.model.generatePassword();
        this.view.displayPassword(password);
        this.updateStrength();
    }

    handleLengthChange(length) {
        this.model.setLength(length);
        this.view.updateLengthDisplay(length);
        this.updateStrength();
    }

    handleCheckboxChange() {
        const values = this.view.getCheckboxValues();
        this.model.setUppercase(values.uppercase);
        this.model.setLowercase(values.lowercase);
        this.model.setNumbers(values.numbers);
        this.model.setSymbols(values.symbols);
        this.updateStrength();
    }

    handleGenerate() {
        const password = this.model.generatePassword();
        this.view.displayPassword(password);
        this.updateStrength();
    }

    handleCopy() {
        const password = this.view.passwordDisplay.value;
        if (password) {
            navigator.clipboard.writeText(password);
            this.view.showNotification();
        }
    }

    updateStrength() {
        const strength = this.model.calculateStrength();
        this.view.updateStrength(strength);
    }
}

const app = new PasswordController(new PasswordModel(), new PasswordView());