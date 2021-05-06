const express = require('express');

const router = express.Router();
const productController = require('../controller/productController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/img'),
    filename: (req,  res, cb) =>{cb(null, 'img-' + Date.now() + path.extname(file.oroginalname))}
});
const upload = multer({storage})

router.get('/listar', productController.show)

router.get('/edit', productController.edit)

router.get('/detail/:id', productController.detail)

router.get('/create', upload.single('image'),productController.create)

router.post('/store', upload.single('image'), productController.store);

router.put('/:id', upload.single('image'), productController.update);


module.exports = router;