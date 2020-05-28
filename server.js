const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const Note = require('./models/toDoSchema.js');
const port = 3000;
const noteController = require('./controllers/notes.js');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use('/', noteController);




app.listen(port, () =>{
    console.log('listening on ' + port)
})
