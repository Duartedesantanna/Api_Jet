const knex = require('../../database/conexao');
const cadastroProdutoSchema = require('../../validation/cadastroProdutoSchema');
const editarProdutoSchema = require('../../validation/editarProdutoSchema');

const cadastrarProduto = async (req, res) => {

  const { nome, descricao, estoque, status, preco } = req.body;
  
  let imagem = "";

  if(req.file !== undefined){
    imagem = req.file.filename;
  }

  const dadosNovoProduto = {
    nome,
    imagem,
    descricao,
    estoque,
    status,
    preco
  };

  try {
    
    await cadastroProdutoSchema.validate(dadosNovoProduto);

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
  const { id } = req.params;

  const { nome, imagem, descricao, estoque, status, preco } = req.body;

  const dadosEditadoProduto = {
    nome,
    imagem,
    descricao,
    estoque,
    status,
    preco
  };

  try {

    await editarProdutoSchema.validate(req.body);

    dadosEditadoProduto.preco = dadosEditadoProduto.preco.replace(",", ".");

    const produtoEditado = await knex('produtos').where('id', id).update(dadosEditadoProduto);

    if (!produtoEditado) {
      return res.status(400).json({ mensagem: 'Não foi possivel editar o produto.' });
    }

    return res.status(200).json({ mensagem: 'Edição concluída com sucesso.' })

  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const editarProdutoImagem = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, estoque, status, preco } = req.body;
    
  let imagem = "";

  if(req.file !== undefined){
    imagem = req.file.filename;
  }

  const dadosEditadoProduto = {
    nome,
    imagem,
    descricao,
    estoque,
    status,
    preco
  };

  try {

    await cadastroProdutoSchema.validate(dadosEditadoProduto);
  
    dadosEditadoProduto.preco = dadosEditadoProduto.preco.replace(",", ".");
  
    const produtoEditado = await knex('produtos').where('id', id).update(dadosEditadoProduto);
  
    if (!produtoEditado) {
      return res.status(400).json({ mensagem: 'Não foi possivel editar o produto.' });
    }
  
    return res.status(200).json({ mensagem: 'Edição concluída com sucesso.' })
    
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
  
};

const excluirProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const produtoExcluir = await knex('produtos').where('id', id).del();
    if (!produtoExcluir) {
      return res.status(400).json({ mensagem: 'Não foi possivel excluir o produto.' });
    }

    return res.status(200).json({ mensagem: 'Exclusão concluída com sucesso.' })

  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const listarProdutos = async (req, res) => {
  try {
      const listaDeProodutos = await knex('produtos').orderBy('id');

      return res.status(200).json(listaDeProodutos);

  } catch (error) {
      return res.status(400).json({ mensagem: error.message });
  }
};

module.exports = {
  cadastrarProduto, editarProduto, excluirProduto, listarProdutos, editarProdutoImagem
}