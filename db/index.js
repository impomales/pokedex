const Sequelize = require('sequelize');
const db = require('./_db');
const Pokemon = require('./Pokemon');
const Trainer = require('./Trainer');

module.exports = {
  db,
  Pokemon,
  Trainer
};
