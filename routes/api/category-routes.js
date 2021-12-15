const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: ["id", "category_name"], order: [["id", "ASC"]],
  
    // be sure to include its associated Products
    include: [{attributes: ["id", "product_name", "price", "stock", "category_id"], model: Product,}]})
    .then(categDataDB => res.json(categDataDB)).catch(err => {console.log(err); res.status(500).json(err);});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({attributes: ["id", "category_name",], where: {id: req.params.id},

  // be sure to include its associated Products
    include: [{attributes: ["id", "product_name", "price", "stock", "category_id"], model: Product,}]})
    .then(categDataDB => res.json(categDataDB)).catch(err => {console.log(err); res.status(500).json(err);});
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({category_name: req.body.category_name}).then(categDataDB => res.json(categDataDB)).catch(err => {console.log(err); res.status(500).json(err);});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({category_name: req.body.category_name}, {where: {id: req.params.id}})
  .then(categDataDB => {if (!categDataDB) {res.status(404).json({ message: "No category found with this id" });return;}
    res.json(categDataDB);}).catch(err => {console.log(err); res.status(500).json(err);});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}}).then(categDataDB =>{if (!categDataDB) {res.status(404).json({ message: "Category not found" });return;}
    res.json(categDataDB);}).catch(err => {console.log(err); res.status(500).json(err);});
});

module.exports = router;
