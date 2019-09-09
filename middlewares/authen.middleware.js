exports.authen = (req, res, next) => {

    if(!req.cookies.idUser){
        res.redirect('/authen/login');
        return
    };
    next();
}