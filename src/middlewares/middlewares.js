module.exports.middleGlobal = (req, res, next) => {
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