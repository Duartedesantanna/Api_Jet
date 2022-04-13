const express = require('express');
const produtosLoja = require('./controller/produtos');
const produtosAdm = require('./controller/administrative/produtos');

const rotas = express();

//teste
rotas.get('/', function (req, res) {
    res.send("Servidor OK!")
})

//Produtos Administrativos
rotas.post('/adm/produtos', produtosAdm.cadastrarProduto);
rotas.get('/adm/produtos', produtosLoja.listarProdutos);
rotas.get('/adm/produtos/:pesquisa', produtosLoja.buscarProdutos)
rotas.patch('/adm/produtos/:id', produtosAdm.editarProduto);
rotas.delete('/adm/produtos/:id', produtosAdm.excluirProduto);

//Produtos Loja
rotas.get('/produtos', produtosLoja.listarProdutos);
rotas.get('/produtos/:id', produtosLoja.abrirProduto);


module.exports = rotas;