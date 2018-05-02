const express = require('express');
const router = express.Router();
const pokemonRoutes = require('./pokemon');
const trainerRoutes = require('./trainers');

router.use('/pokemon', pokemonRoutes);
router.use('/trainers', trainerRoutes);

module.exports = router;
