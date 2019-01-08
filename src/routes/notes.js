const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes', (req, res) =>{
    res.send('Notes from database');
});

router.post('/notes/new-note', async (req, res)=>{
  const {title, description} =req.body;
  const errors= [];
  if(!title)
  {errors.push({text: 'Please write a title'})};

  if(!description)
  {errors.push({text:'Please write a description'})};

  if(errors.length>0)
  {
      res.render('notes/new-note',{
          errors,
          title,
          description
      });
  } 
  else{
        const newNote = new Note({title, description});
        await newNote.save();
        res.redirect('/notes')
      };
  
})

router.get('/notes/add', (req, res)=> {
    res.render('notes/new-note');
});

module.exports= router;