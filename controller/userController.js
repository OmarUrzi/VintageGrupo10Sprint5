let productos = require('../data/users.json');

const userController = {
    register:(req,res) =>{
        res.render('registro');
    },
    login:(req,res) =>{
        res.render('inicio-sesion')
    },
    table: (req, res)=>{
        res.render('adminusuarios',{productos})
    },
    listar:(req, res)=>{
        res.render('adminProducts', {productos})
    }
}

module.exports = userController