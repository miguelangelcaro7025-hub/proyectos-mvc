class PasswordModel {
    constructor() {
        this.length = 16;
        this.includeUppercase = true;
        this.includeLowercase = true;
        this.includeNumbers = true;
        this.includeSymbols = true;
        
        this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
        this.numbers = '0123456789';
        this.symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    setLength(length) {
        this.length = parseInt(length);
    }

    setUppercase(value) {
        this.includeUppercase = value;
    }

    setLowercase(value) {
        this.includeLowercase = value;
    }

    setNumbers(value) {
        this.includeNumbers = value;
    }

    setSymbols(value) {
        this.includeSymbols = value;
    }

    getCharacterSet() {
        let charset = '';
        if (this.includeUppercase) charset += this.uppercase;
        if (this.includeLowercase) charset += this.lowercase;
        if (this.includeNumbers) charset += this.numbers;
        if (this.includeSymbols) charset += this.symbols;
        return charset;
    }

    generatePassword() {
        const charset = this.getCharacterSet();
        if (charset === '') return '';
        
        let password = '';
        for (let i = 0; i < this.length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    calculateStrength() {
        let strength = 0;
        let types = 0;

        if (this.includeUppercase) types++;
        if (this.includeLowercase) types++;
        if (this.includeNumbers) types++;
        if (this.includeSymbols) types++;

        strength = types * this.length;

        if (strength < 30) return { level: 'weak', text: 'Débil', color: '#dc3545', width: '33%' };
        if (strength < 60) return { level: 'medium', text: 'Media', color: '#ffc107', width: '66%' };
        return { level: 'strong', text: 'Fuerte', color: '#28a745', width: '100%' };
    }
}