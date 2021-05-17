const express = require('express');

const router = express.Router();
const productController = require('../controller/productController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/img'),
    filename: (req, file, cb) =>{cb(null, 'img-' + Date.now() + path.extname(file.originalname))}
});
<<<<<<< HEAD

const { body } = require('express-validator')


const upload = multer({storage})



const validaciones = [
   
    body('name').notEmpty().withMessage('En nombre no puede estar en blanco').bail()
    
    .isString().withMessage('Deber ser un String'),

    body('price').notEmpty().withMessage('En precio no puede estar en blanco'),
    body('descuento').notEmpty().withMessage('En descuento no puede estar en blanco'),
  
    body('image').custom((value, {req}) => {
     let file = req.file
     // Si es undefined, se relaciona con  Multer
     if ( !file) {
        throw new Error('Debe agregar una foto');
      }

     return true

    })
]

const validacionesEdit = [
   
    body('name').notEmpty().withMessage('En nombre no puede estar en blanco').bail()
    
    .isString().withMessage('Deber ser un String'),

    body('price').notEmpty().withMessage('En precio no puede estar en blanco'),
    body('descuento').notEmpty().withMessage('En descuento no puede estar en blanco')
  
] 

router.get('/listar', productController.listar)

router.get('/edit/:id', productController.edit)
=======
const upload = multer({storage})

router.get('/listar', productController.listar)

router.get('/edit', productController.edit)
>>>>>>> fd68e9c5fb581b92d341d655241ea4756cda83d8

router.get('/detail/:id', productController.detail)

router.get('/create', upload.single('image'),productController.create)

<<<<<<< HEAD
router.post('/store', upload.single('image'),validaciones, productController.store);

router.put('/:id', upload.single('image'), productController.update);

=======
router.post('/store', upload.single('image'), productController.store);

router.put('/:id', upload.single('image'), productController.update);


>>>>>>> fd68e9c5fb581b92d341d655241ea4756cda83d8
module.exports = router;