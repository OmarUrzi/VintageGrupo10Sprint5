let productos = require('../data/datosProductos')

let productController = {
    show: (req, res) => {
        const product = productModel.find(req.params.id);
        if(product){
            res.render('userProducts', { productos })
        }else{
            res.render('error404');
        }
    },
    edit: (req, res) => {
        let product = productModel.find(req.params.id);
        if(product){
            res.render('edit', { productos })
        }else{
            res.render('error404');
        }
    },
    detail: (req, res) => {
        res.render('detail-product', { productos })
    },
    create: (req, res) => {
        res.render('create')
    },
    store: (req, res)=>{
        if(req.file){
            const product = req.body;
            product.image = req.file ? req.file.filename : '';
            productModel.create(product);
        }else{
            res.redirect('create')
        }
    },
    update: (req, res) =>{
        let  product = req.body;
        product.id = req.params.id;
        product.image = req.file ? req.file.filename : req.body.oldImagen;
        if (req.body.image===undefined) {
            product.image = product.oldImage
        }
        delete product.oldImage;
        productModel.update(product);
        res.redirect('/')
    },
    destroy: (req, res) => {
        productModel.delete(req.params.id);
        res.redirect('/')
    }
    
}

module.exports = productController