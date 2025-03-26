const express = require('express');
const {faker} = require('@faker-js/faker')

const router = express.Router();

//Especifico
router.get('/products/filter', function(req,res){
  res.send('yo soy un filter')
})

//dinamico
router.get("/", (req, res) => {
  // primero se crea un array vacio para almacenar los productos
  const products = [];
  // segundo se crea una variable limit que va a ser igual a size o 20 en donde size es el query que se le pasa por parametro
  let {size} = req.query //req.query es un objeto que tiene todas las querys que se le pasan por parametro
  // tercero se crea un for que va a iterar desde 0 hasta el limite que se le pase por parametro
  const limit = size || 20;
  for (let index = 0; index < limit; index++) {
    // push se usa para agregar un elemento al array, y por ultimo se le pasa un objeto con los datos que se quieren agregar
    products.push({
      name: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      image: faker.image.url()
    })
  }
  // se retorna el array de productos con el metodo json desde la respuesta
 res.json(products)
});



router.get('/products/:productId', function(req,res){
  const { productId } = req.params;
  res.json({
      productId,
      name: 'producto 2',
      price: 500
    })
} )

// Crear un producto

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

module.exports = router;
