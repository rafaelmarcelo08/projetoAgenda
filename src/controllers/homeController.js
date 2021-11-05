exports.paginaInicial = (req, res) => {
    // console.log(req.session.usuario); 
    // req.flash('info', 'ola mundo');
    // req.flash('error', 'asdfasdf');
    // req.flash('success', 'bla');

    // console.log(req.flash('error'), req.flash('success'));
    res.render('index', {
        title: 'Este será um titulo da página',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};