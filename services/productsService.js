const {faker} = require('@faker-js/faker')

class productService {

    constructor() {
        this.products = [];
        this.addProduct();
    }

    addProduct() { // se crea una funcion addProduct para agregar productos
      const limit = 20;
      for (let index = 0; index < limit; index++) {
        // push se usa para agregar un elemento al array, y por ultimo se le pasa un objeto con los datos que se quieren agregar
        this.products.push({
          id: faker.commerce.productAdjective(),
          name: faker.commerce.product(),
          description: faker.commerce.productDescription(),
          price: faker.commerce.price(),
          image: faker.image.url()
        })
      }
    }

    getProducts() { // se crea una funcion getProducts para obtener productos
        return this.products;
    }

    getProductById(id) { // se crea una funcion getProductById para obtener un producto por id
        return this.products.find(product => product.id === id);
    }

    updateProduct(id, product) { // se crea una funcion updateProduct para actualizar un producto
        const index = this.products.findIndex(product => product.id === id);
        this.products[index] = product;
    }

    deleteProduct(id) { // se crea una funcion deleteProduct para eliminar un producto
        this.products = this.products.filter(product => product.id !== id);
    }

}

module.exports = productService;
