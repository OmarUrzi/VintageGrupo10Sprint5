let productos = require('../data/datosProductos')

let homeController = {

    leerTodos: (req, res) => {
        res.render('index', { 'productos': productos })
    }

}

module.exports = homeController