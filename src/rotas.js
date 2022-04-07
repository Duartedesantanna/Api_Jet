const express = require('express');
const produtos = require('./controller/produtos');

const rotas = express();

//teste
rotas.get('/', function (req, res) {
    res.send("Servidor OK!")
})

module.exports = rotas;