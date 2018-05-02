const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('./_db');

const Trainer = db.define('trainer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  class: {
    type: Sequelize.STRING
  },
  badges: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

module.exports = Trainer;
