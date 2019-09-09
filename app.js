//import module
const express = require('express');
const path = require('path');
const userRouter = require('./routes/user.route'); //import router of user

//define ..
const app = express();

//method use
app.use(express.static(path.join(__dirname, "public"))); // static folder public
app.use('/user', userRouter);

//method get
app.get('/', (req, res) => {
    res.render('index.pug', {})
});

app.listen("3000");