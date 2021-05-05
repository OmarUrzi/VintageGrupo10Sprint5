const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');


router.get('/admintable', userController.table)

router.get('/adminlistar', userController.listar)


module.exports = router