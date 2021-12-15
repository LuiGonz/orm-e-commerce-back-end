const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  // define columns
  {category_name: {allowNull: false, type: DataTypes.STRING}, id: {allowNull: false, autoIncrement: true,primaryKey: true, type: DataTypes.INTEGER}},
  {sequelize, timestamps: false, freezeTableName: true, underscored: true, modelName: 'category'}
);

module.exports = Category;
