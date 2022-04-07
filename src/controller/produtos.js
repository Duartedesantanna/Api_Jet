const knex = require('../database/conexao');

const listarProdutos = async (req, res) => {
    try {
        const listaDeProodutos = await knex('produtos').orderBy('id');

        return res.status(200).json(listaDeProodutos);

    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const abrirProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const detalheProoduto = await knex('produtos').where('id', id);

        if (detalheProoduto.length === 0) {
            return res.status(400).json({ mensagem: 'Produto não encontrado' });
        }
        return res.status(200).json(detalheProoduto);
    } catch (error) {

    }
};


module.exports = {
    listarProdutos, abrirProduto
}