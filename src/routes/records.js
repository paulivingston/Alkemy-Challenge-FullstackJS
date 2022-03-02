const express = require('express');
const router = express.Router();

const pool = require('../database'); //conexion a db

router.get('/add', (req, res) => {
    res.render('records/add');
});

router.post('/add', (req, res) => {
    res.send('received');    
});


module.exports = router;