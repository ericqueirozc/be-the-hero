/* Importar pro node*/
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

/* Criar aplicação */
const app = express();

/*informar que vamos utilizar jason nas requisições*/
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333)
