const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  // define columns
  {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    product_id: {references: {key: "id", model: "product"}, type: DataTypes.INTEGER}, 
    tag_id: {references: {key: "id", model: "tag"}, type: DataTypes.INTEGER}
  },
  {freezeTableName: true,modelName: 'product_tag',sequelize,timestamps: false,underscored: true}
);

module.exports = ProductTag;
