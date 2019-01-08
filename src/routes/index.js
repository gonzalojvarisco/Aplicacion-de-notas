//En cada uno de estos archivos iran las url o rutas de nuestro servidor. Ej la ruta loguin, notes, etc
//En index por ejemplo iran las url de nuestra pagina principal
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
} );

router.get('/about', (req, res) => {
    res.render('about');
} );
module.exports= router;