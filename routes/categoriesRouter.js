const express = require('express');
const categoriesRouter = express.Router();

categoriesRouter.get('/:categoryId/products/:productId', function(req, res) {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

module.exports = categoriesRouter;
