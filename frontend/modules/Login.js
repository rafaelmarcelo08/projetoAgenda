const validator = require('validator');

export default class Login {
    constructor(formCasdastro) {
        this.form = document.querySelector(formCasdastro);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name=email]')
        const passwordInput = el.querySelector('input[name=password]')
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            alert('Email invalido');

            error = true;
            return;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alert('Senha invalido');
            error = true;
            return;
        }

        if (!error) el.submit();
    }
}