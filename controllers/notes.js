const express = require('express');
const noteController = express.Router();

const Note = require('../models/toDoSchema.js');



noteController.get('/', (req, res) =>{
    res.render('Index.jsx');
})



module.exports = noteController;