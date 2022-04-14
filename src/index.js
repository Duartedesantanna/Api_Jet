require('dotenv').config();
const express = require('express');
const app = express();
const knex = require('./database/conexao');
const rotas = require('./rotas');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

app.use(express.static(path.join(__dirname,"public")));

app.use(
    cors({
        origin: '*',
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    })
)


app.use(express.json());
app.use(rotas);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(require('./../swagger.json')));

app.listen(process.env.PORT);