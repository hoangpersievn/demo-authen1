//import module

//method get
exports.user = (req, res) => {
    res.render('users/user.pug', {});
};

exports.login_get = (req, res) => {
    res.render('users/authen.pug', {})
};

//method post
exports.login_post = (req, res) => {
    res.redirect('/user');
}