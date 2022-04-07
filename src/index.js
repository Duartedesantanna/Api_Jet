const express = require('express');
const app = express();
const knex = require('./database/conexao');

app.use(express.json());

app.listen(process.env.PORT);