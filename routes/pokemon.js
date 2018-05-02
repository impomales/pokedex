const express = require('express');
const router = express.Router();
const { Pokemon } = require('../db');

router.get('/', (req, res, next) => {
  Pokemon.findAll()
    .then(pokemon => {
      res.send(pokemon);
    })
    .catch(err => {
      next(err);
    })
});

module.exports = router;
