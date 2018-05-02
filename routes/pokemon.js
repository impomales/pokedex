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

router.post('/', (req, res, next) => {
  Pokemon.create(req.body)
    .then(createdPokemon => {
      res.status(201).send(createdPokemon);
    })
    .catch(err => {
      next(err);
    })
});

router.get('/:id', (req, res, next) => {
  Pokemon.findById(Number(req.params.id))
    .then(pokemon => {
      res.send(pokemon);
    })
    .catch(err => {
      next(err);
    })
});

router.delete('/:id', (req, res, next) => {
  Pokemon.findById(Number(req.params.id))
    .then(pokemon => {
      return pokemon.destroy();
    })
    .then((destroyedPokemon) => {
      res.send(`pokemon with id ${req.params.id} successfully deleted`);
    })
    .catch(err => {
      next(err);
    })
});

module.exports = router;
