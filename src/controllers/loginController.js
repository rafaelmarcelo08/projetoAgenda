const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
    return;
};

exports.register = async (req, res) => {
    const login = new Login(req.body);

    try {
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);

            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function () {
            return res.redirect('/login/index');
        });
        return;
    } catch (erro) {
        console.log(erro);
        return res.render('404');
    }
};
