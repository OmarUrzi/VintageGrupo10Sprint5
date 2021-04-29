const express = require('express');

const router = express.Router();

const registerController = require('../controller/registerController');

router.get('/', (req, res) => {
    
  res.render('registro');
});
module.exports = router;