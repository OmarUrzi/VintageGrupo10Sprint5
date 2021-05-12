let productos = require('../model/jsonDataBase');

let productModel = productos('productos');

let productController = {
    listar:(req,res) => {
        const listado = productModel.all();
        res.render('listadoProductos', {listado})
    },
    edit: (req, res) => {
        let product = productModel.find(req.params.id);
        if(product){
            res.render('edit', { productos })
        }
    },
    detail: (req, res) => {
        res.render('detail-product', { productos })
    },
    create: (req, res) => {
        res.render('create')
    },
    store: (req, res)=>{
            const product = req.body;
            product.image = req.file ? req.file.filename : '';
            productModel.create(product);
            res.redirect('/')
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