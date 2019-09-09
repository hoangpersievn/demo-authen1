//import module 
const express = require('express');

//import controller
const { user, login_get, login_post } = require('../controllers/user.controller');

//Define router
const router = express.Router();

//Method GET
router.get('/', user);
router.get('/login', login_get);

//method POST
router.post('/login', login_post);
//export module
module.exports = router;