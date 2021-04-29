const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const puerto = process.env.PORT

app.use(express.static('public'));

const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const registerRouter = require('./routes/registerRouter');
const inicioSesionRouter = require('./routes/inicioSesionRouter');
const carritoRouter = require('./routes/carritoRouter');
const userController = require('./controller/userController');

app.set('view engine', 'ejs')

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use('/', homeRouter);
app.use('/productos', productRouter);
app.use('/registro', registerRouter);
app.use('/inicio-sesion', inicioSesionRouter);
app.use('/carrito', carritoRouter);
//app.use('/users', userController);