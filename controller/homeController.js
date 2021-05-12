let productos = require('../data/datosProductos')

let homeController = {

    leerTodos: (req, res) => {
        const products = productModel.all();
        res.render('index', {productos});
    }

}

module.exports = homeController