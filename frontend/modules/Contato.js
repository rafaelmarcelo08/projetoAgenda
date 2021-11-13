const validator = require('validator');

class Contato {
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
        const nomeInput = el.querySelector('input[name=nome]');
        const emailInput = el.querySelector('input[name=email]');
        const telefoneInput = el.querySelector('input[name=telefone]');

        let error = false;

        if (!!!nomeInput.value || nomeInput.value.length < 3) {
            alert('Nome invalido');
            error = true;
            return;
        }

        if (!!emailInput.value && !validator.isEmail(emailInput.value)) {
            alert('Email invalido');
            error = true;
            return;
        }

        if (!!!emailInput.value && !!!telefoneInput.value) {
            alert('Email ou telefone deve ser preenchido');
            error = true;
            return;
        }

        if (!error) el.submit();
    }
}

export default Contato;