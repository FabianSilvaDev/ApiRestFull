const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi (app){

  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);

  routerV1.use('/products', productsRouter);
  routerV1.use('/users', usersRouter);
  routerV1.use('/categories', categoriesRouter);
}

module.exports = routerApi;
