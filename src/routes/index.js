//En cada uno de estos archivos iran las url o rutas de nuestro servidor. Ej la ruta loguin, notes, etc
//En index por ejemplo iran las url de nuestra pagina principal
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index');
} );

router.get('/about', (req, res) => {
    res.send('About');
} );
module.exports= router;