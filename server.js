const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
 

const mongoose = require('mongoose');
mongoose 
  .connect('mongodb://brandonalexander@ds233500.mlab.com:33500/backendproject1111')
  .then(mongo => {
    console.log('its raining men')
  })
  .catch(err => {
    console.log('error', err);
  });

const notesController = require('./notes/notesController');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});
server.use('/notes', notesController);

// const port = process.env.PORT || 5000;
// server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
server.listen(process.env.PORT || 1234)