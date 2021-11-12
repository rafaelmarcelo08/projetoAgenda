module.exports.middleGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

module.exports.checkCsrfError = (error, req, res, next) => {
    if (error) {
        return res.render('404');
    }
    next();
};

module.exports.csrfMiddleWare = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};