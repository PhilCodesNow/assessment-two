const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/toDoSchema.js');
const port = process.env.PORT || 3000
// const MONGOURI = process.env.MONGO_URI
const MONGOURI = 'mongodb://localhost:27017/to-do-list'
const noteController = require('./controllers/notes.js');
require('dotenv').config();
const methodOverride = require('method-override');


mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected mongo');
})




app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.use('/', noteController);




app.listen(port, () =>{
    console.log('listening on ' + port)
})
