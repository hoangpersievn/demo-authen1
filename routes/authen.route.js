const express = require('express');
const router = express.Router();

//import middleware
const {login_get, login_post} = require('../controllers/authen.controller');

//method GEST
router.get('/', login_get);

//method POST
router.post('/', login_post);

module.exports = router;