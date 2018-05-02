const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('./_db');

const Pokemon = db.define('pokemon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  weaknesses: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  gender: {
    type: Sequelize.ENUM(['male', 'female', 'both']),
    allowNull: false
  },
  weight: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  weightStr: {
    type: Sequelize.VIRTUAL,
    get () {
      return `${this.getDataValue('weight')} lbs`;
    }
  },
  hp: {
    type: Sequelize.INTEGER,
  },
  attack: {
    type: Sequelize.INTEGER,
  },
  defense: {
    type: Sequelize.INTEGER,
  },
  specialAttack: {
    type: Sequelize.INTEGER,
  },
  specialDefense: {
    type: Sequelize.INTEGER,
  },
  speed: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Pokemon;
