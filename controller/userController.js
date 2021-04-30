let productos = require('../data/datosProductos');

const userController = {
    show: (req, res) => {
        res.render('userProducts', {productos})
    },
    table: (req, res)=>{
        res.render('adminusuarios',{productos})
    },
    listar:(req, res)=>{
        res.render('adminProducts', {productos})
    }
}

module.exports = userController