// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: "category_id"}); 

// Categories have many Products
Category.hasMany(Product, {foreignKey: "category_id"});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {as: "tags", foreignKey: "product_id", through: ProductTag});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {as: "products", foreignKey: "tag_id", through: ProductTag});

module.exports = {Product, Category, ProductTag, Tag};
