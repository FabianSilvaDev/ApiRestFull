const express = require('express');
const routerApi = require('./routes');

const PORT = process.env.PORT || 3312;  // process.env.PORT es para Heroku, heroku asigna un puerto dinámico

const app = express();


// Middleware de express para manejar JSON en las peticiones
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>hola mundo</h1>');
});


routerApi(app);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Conexión establecida http://localhost:${PORT}`);
});
