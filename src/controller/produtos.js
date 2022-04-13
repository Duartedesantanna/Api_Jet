const knex = require('../database/conexao');

const listarProdutos = async (req, res) => {
    try {
        const listaDeProodutos = await knex('produtos').orderBy('id');

        return res.status(200).json(listaDeProodutos);

    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

const buscarProdutos = async (req, res) => {
    const { pesquisa } = req.params;

    try {

        const busca = `%${pesquisa}%`;
        
        let consultaProdutos = await knex('produtos').orWhereRaw('nome ILIKE ?', [busca]).orWhereRaw('descricao ILIKE ?', [busca]);
        
        if(consultaProdutos.length <= 0){
            return res.status(200).json([])
        }
        return res.status(200).json(consultaProdutos);
        
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
        return res.status(400).json({ mensagem: error.message });
    }
};


module.exports = {
    listarProdutos, buscarProdutos, abrirProduto
}