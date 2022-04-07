const knex = require('../../database/conexao');
const cadastroProdutoSchema = require('../../validation/cadastroProdutoSchema');

const cadastrarProduto = async (req, res) => {
  const { nome, imagem, descricao, estoque, status, preco } = req.body;

  const dadosNovoProduto = {
    nome,
    imagem,
    descricao,
    estoque,
    status,
    preco
  };

  try {

    await cadastroProdutoSchema.validate(req.body);

    dadosNovoProduto.preco = dadosNovoProduto.preco.replace(",", ".");

    const produtoCadastrado = await knex('produtos').insert(dadosNovoProduto);

    if (produtoCadastrado.rowCount === 0) {
      return res.status(400).json({ mensagem: 'Não foi possivel cadastrar o produto.' });
    }

    return res.status(200).json({ mensagem: 'Cadastro concluído com sucesso.' })

  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const editarProduto = async (req, res) => {
};

const excluirProduto = async (req, res) => {
};


module.exports = {
  cadastrarProduto, editarProduto, excluirProduto
}