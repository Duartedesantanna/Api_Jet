require('dotenv').config();
const express = require('express');
const app = express();
const knex = require('./database/conexao');
const rotas = require('./rotas');
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname,"public")));

app.use(
    cors({
        origin: '*',
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    })
)


app.use(express.json());
app.use(rotas);

app.listen(process.env.PORT);