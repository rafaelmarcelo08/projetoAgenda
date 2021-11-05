module.exports.middleGlobal = (req, res, next) => {
    next();
};

module.exports.checkCsrfError = (error, req, res, next) => {
    if (error && error.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
};

module.exports.csrfMiddleWare = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};