const express = require('express');
const produtosLoja = require('./controller/produtos');
const produtosAdm = require('./controller/administrative/produtos');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/upload/produtos')
      //cb(null, './../../Front_end_Jet')
    },
    filename: function(req, file, cb){
      cb(null,Date.now()+"_"+file.originalname);
    }
  });

const upload = multer({storage});

const rotas = express();

rotas.get('/', function (req, res) {
    res.send("Servidor OK!")
})

rotas.post('/adm/produtos', upload.single('foto'), produtosAdm.cadastrarProduto);
rotas.get('/adm/produtos', produtosAdm.listarProdutos);
rotas.get('/adm/produtos/:pesquisa', produtosLoja.buscarProdutos)
rotas.patch('/adm/produtos/:id', produtosAdm.editarProduto);
rotas.patch('/adm/produtos/imagem/:id',  upload.single('foto'), produtosAdm.editarProdutoImagem);
rotas.delete('/adm/produtos/:id', produtosAdm.excluirProduto);

//Produtos Loja
rotas.get('/produtos', produtosLoja.listarProdutos);
rotas.get('/produtos/:id', produtosLoja.abrirProduto);


module.exports = rotas;