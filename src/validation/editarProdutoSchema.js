const yup = require('./yup');

const regexPreco = new RegExp(/(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})$/);

const editarProdutoSchema = yup.object().shape({
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
      .string()
      .typeError('O preço precisa ter um formato válido.')
      .matches(regexPreco, 'O preço deve ser enviado no formato correto utilizando a virgula')
      .required('Este campo deve ser preenchido')
  });
  
  module.exports = editarProdutoSchema;