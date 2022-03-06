const express = require('express');
const router = express.Router();

const pool = require('../database'); //conexion a db

router.get('/add', (req, res) => {
    res.render('records/add');
});

router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newRecord = {
        title,
        url,
        description
    };
    await pool.query('INSERT INTO records set ?', [newRecord]);
    req.flash('success', 'Record saved successfully');
    res.redirect('/records');    
});

router.get('/', async (req, res) => {
    const records = await pool.query('SELECT * FROM records');
    res.render('records/record', {records});
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM records WHERE id = ?', [id]);
    req.flash('success', 'Record deleted successfully');
    res.redirect('/records');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const records = await pool.query('SELECT * FROM records WHERE id = ?', [id]);
    res.render('records/edit', {records:records[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, url, description } = req.body;
    const newRecord = {
        title,
        url, 
        description
    }
    await pool.query('UPDATE records SET ? WHERE id = ?', [newRecord, id]);
    req.flash('success', 'Record edited successfully');
    res.redirect('/records');
});


module.exports = router;