exports.authen = (req, res, next) => {

    if(!req.cookies.set_cookie){
        res.redirect('/authen/login');
        return
    };
    next();
}