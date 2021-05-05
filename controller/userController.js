let productos = require('../data/datosProductos');

const userController = {
    
    table: (req, res)=>{
        res.render('adminusuarios',{productos})
    },
    listar:(req, res)=>{
        res.render('adminProducts', {productos})
    }
}

module.exports = userController