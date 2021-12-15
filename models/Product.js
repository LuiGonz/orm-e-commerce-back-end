// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  // define columns
  {
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
    product_name: {allowNull: false, type: DataTypes.STRING},
    price: {allowNull: false, type: DataTypes.DECIMAL, validate: {isDecimal: true}},
    stock: {allowNull: false, defaultValue: 10, type: DataTypes.INTEGER, validate: {isNumeric: true}},
    category_id: {references: {key: "id", model: "category"}, type: DataTypes.INTEGER}
  },
  {freezeTableName: true, modelName: 'product', sequelize, timestamps: false, underscored: true}
);

module.exports = Product;
