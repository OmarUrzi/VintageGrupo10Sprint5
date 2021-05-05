const express = require('express');

const router = express.Router();
const multer = require('multer');
const productController = require('../controller/productController');

router.get('/listar', productController.show)

router.get('/edit', productController.edit)

router.get('/detail/:id', productController.detail)

router.get('/create', productController.create)






module.exports = router;