const express = require('express');
const noteController = express.Router();

const Note = require('../models/toDoSchema.js');



// noteController.get('/', (req, res) =>{
//     Note.find({}, (err, allNotes) =>{
//         res.render('Index', {
//             notes: allNotes
//         })
//     })
// })

noteController.get('/', (req, res) =>{
    Note.find({}, (err, allNotes) =>{
        if(allNotes < 1){
            res.render('Empty')
        }else{
        res.render('Index', {
            notes: allNotes
        })
    }
    })
})

noteController.get('/new', (req, res) =>{
    res.render('New');
})

noteController.post('/', (req, res) =>{
    Note.create(req.body, (err, newNote) =>{
        res.redirect('/')
    })
})

noteController.delete('/:id/delete', (req, res) =>{
    Note.findByIdAndRemove({_id: req.params.id}, (err, foundNote) =>{
        res.redirect('/')
    })
})

module.exports = noteController;