//import module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.route'); //import router of user
const authenRouter = require('./routes/authen.route');
const { authen } = require('./middlewares/authen.middleware');

//define ..
const app = express();

//method use
app.use(express.static(path.join(__dirname, "public"))); // static folder public
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use('/user', authen,userRouter);
app.use('/authen', authenRouter);

//method get
app.get('/', (req, res) => {
    res.render('index.pug', {})
});

app.listen("3000");