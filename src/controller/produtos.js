const knex = require('../database/conexao');

const listarProdutos = async (req, res) => {
    try {
        const listaDeProodutos = await knex('produtos').orderBy('id');
        
        return res.status(200).json(listaDeProodutos);

    } catch (error) {
        return res.status(400).json({ mensagem: error.message});
    }   
};

const abrirProduto = async (req, res) => {
};


module.exports = {
    listarProdutos, abrirProduto
  }