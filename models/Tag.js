const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  // define columns
  {
    id: {allowNull: false,autoIncrement: true,primaryKey: true,type: DataTypes.INTEGER},
    tag_name: {type: DataTypes.STRING}
  },
  {freezeTableName: true, modelName: 'tag', sequelize, timestamps: false, underscored: true}
);

module.exports = Tag;
