const express = require('express');

const router = express.Router();
const multer = require('multer');
const userController = require('../controller/userController');


router.get('/admintable', userController.table)
router.get('/adminlistar', userController.listar)
router.get('/registro', userController.register);
router.get('/inisio-sesion', userController.login);

module.exports = router