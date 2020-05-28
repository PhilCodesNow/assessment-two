const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const Note = require('./models/toDoSchema.js');
const port = 3000;



app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) =>{
    res.render('Index.jsx');
})







app.listen(port, () =>{
    console.log('listening on ' + port)
})
