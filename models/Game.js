const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js').development;

class Game extends Model {}
Game.init({
  title: DataTypes.STRING,
  genre: DataTypes.STRING,
}, { sequelize, modelName: 'game' });

module.exports = Game;