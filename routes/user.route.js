//import module 
const express = require('express');

//import controller
const { user } = require('../controllers/user.controller');
// const { authen } = require('../middlewares/authen.middleware');

//Define router
const router = express.Router();

//Method GET
router.get('/', user);

//export module
module.exports = router;