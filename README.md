# API de E-Commerce con Express, Faker y Productos

Esta es una API RESTful básica creada con Node.js y Express. Utiliza la librería `@faker-js/faker` para generar datos ficticios de usuarios y productos de e-commerce. El propósito de esta API es practicar el desarrollo de una API con Express, aplicar patrones de diseño como la responsabilidad de las rutas, y simular una API de comercio electrónico para prácticas.

## Tecnologías y Herramientas

![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white)&nbsp;
![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![Express](https://img.shields.io/badge/Express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![Faker](https://img.shields.io/badge/Faker-%23F8F9FA.svg?style=for-the-badge&logo=python&logoColor=black)&nbsp;

## Descripción

Este proyecto proporciona una API sencilla para generar una lista de usuarios ficticios y productos de e-commerce. Los usuarios incluyen propiedades como nombre, apellido, número de teléfono y dirección. Los productos incluyen propiedades como nombre, descripción, precio y categoría. Puedes especificar la cantidad de usuarios y productos a generar a través de parámetros en las consultas.

### Endpoints

#### **Usuarios**

- **GET `/users`**: Devuelve una lista de usuarios ficticios.

#### Parámetros:

- `size` (opcional): Especifica la cantidad de usuarios a generar. Por defecto, se generarán 10 usuarios.

Ejemplo de uso:

```bash
GET http://localhost:3000/users?size=5
