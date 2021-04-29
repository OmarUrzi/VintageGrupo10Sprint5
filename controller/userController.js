let productos = require('../data/datosProductos');

const userController = {
    show: (req, res) => {
        res.render('userViews')
    }
}

module.exports = userController