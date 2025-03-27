const express = require('express');
const router = express.Router();
const productService = require('../services/productsService');

//Especifico
router.get('/products/filter', function(req,res){
  res.send('yo soy un filter')
})

const services = new productService();

//dinamico
router.get("/", (req, res) => {
  const products = services.getProducts(); // se llama a la funcion getProducts para obtener los productos
  res.json(products)
});


// Crear un producto

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({ //201 es el codigo de estado que se le pasa cuando se crea un recurso en el servidor el status es una funcion que se le pasa un codigo de estado
    message: 'created',
    data: body
  });
});

// Actualizar un producto

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});

// lectura de un producto
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = services.getProductById(id);
  res.json(product);
});

// Eliminar un producto
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id
  });
});

module.exports = router;
