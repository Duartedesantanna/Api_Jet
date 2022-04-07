const yup = require('./yup');

const cadastroProdutoSchema = yup.object().shape({
    nome: yup
      .string()
      .required('Este campo deve ser preenchido'),
    imagem: yup
      .string()
      .required('Este campo deve ser preenchido'),
    descricao: yup
      .string()
      .required('Este campo deve ser preenchido'),
    estoque: yup
      .number()
      .required('Este campo deve ser preenchido'),
    status: yup
      .boolean()
      .required('Este campo deve ser preenchido'),
    preco: yup
      .number()
      .required('Este campo deve ser preenchido')
  });
  
  module.exports = cadastroProdutoSchema;