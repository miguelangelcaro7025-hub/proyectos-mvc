class PasswordView {
    constructor() {
        this.passwordDisplay = document.getElementById('passwordDisplay');
        this.lengthSlider = document.getElementById('lengthSlider');
        this.lengthValue = document.getElementById('lengthValue');
        this.uppercaseCheckbox = document.getElementById('includeUppercase');
        this.lowercaseCheckbox = document.getElementById('includeLowercase');
        this.numbersCheckbox = document.getElementById('includeNumbers');
        this.symbolsCheckbox = document.getElementById('includeSymbols');
        this.generateBtn = document.getElementById('generateBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.strengthIndicator = document.getElementById('strengthIndicator');
        this.strengthText = document.getElementById('strengthText');
        this.notification = document.getElementById('notification');
    }

    displayPassword(password) {
        this.passwordDisplay.value = password;
    }

    updateLengthDisplay(length) {
        this.lengthValue.textContent = length;
    }

    updateStrength(strength) {
        this.strengthIndicator.style.width = strength.width;
        this.strengthIndicator.style.background = strength.color;
        this.strengthText.textContent = strength.text;
        this.strengthText.style.color = strength.color;
    }

    showNotification() {
        this.notification.classList.add('show');
        setTimeout(() => {
            this.notification.classList.remove('show');
        }, 2000);
    }

    bindLengthChange(handler) {
        this.lengthSlider.addEventListener('input', (e) => {
            handler(e.target.value);
        });
    }

    bindCheckboxChange(handler) {
        this.uppercaseCheckbox.addEventListener('change', () => handler());
        this.lowercaseCheckbox.addEventListener('change', () => handler());
        this.numbersCheckbox.addEventListener('change', () => handler());
        this.symbolsCheckbox.addEventListener('change', () => handler());
    }

    bindGenerate(handler) {
        this.generateBtn.addEventListener('click', handler);
    }

    bindCopy(handler) {
        this.copyBtn.addEventListener('click', handler);
    }

    getCheckboxValues() {
        return {
            uppercase: this.uppercaseCheckbox.checked,
            lowercase: this.lowercaseCheckbox.checked,
            numbers: this.numbersCheckbox.checked,
            symbols: this.symbolsCheckbox.checked
        };
    }
}

