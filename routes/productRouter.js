const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

router.get('/', productController.index)

router.get('/edit', productController.edit)

router.get('/detail/:id', productController.detail)

router.get('/create', productController.create)





module.exports = router;