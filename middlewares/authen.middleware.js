exports.authen = (req, res, next) => {

    if(req.cookies.set_cookie !== "1234"){
        res.redirect('/authen')
    };
    next();
}