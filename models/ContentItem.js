const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js').development;

class ContentItem extends Model {}
ContentItem.init({
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
}, { sequelize, modelName: 'contentItem' });

module.exports = ContentItem;