
//method get
exports.login_get = (req, res) => {
    res.render('authen.pug', {
        errors : []
    })
};

//method post
exports.login_post = (req, res) => {
    const emailUser = req.body.email;
    const passwordUser = req.body.password;
    const errors = [];
    
    if(!emailUser){
        errors.push("Do you enter email ? ")
        res.render('authen.pug', {
            errors : errors
        });
    }
    if(!passwordUser){
        errors.push("Do you enter password ? ")
        res.render('authen.pug', {
            errors : errors
        });
    }
    res.cookie('set_cookie', 1234);
    res.redirect('/user')
}