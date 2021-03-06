CREATE DATABASE Ecommerce;

DROP TABLE IF EXISTS Produtos CASCADE;

CREATE TABLE Produtos(
  id serial NOT NULL PRIMARY KEY,
  nome varchar(150) NOT NULL,
  imagem text NOT NULL,
  descricao varchar(2000) NOT NULL,
  estoque int NOT NULL,
  status boolean NOT NULL,
  preco decimal NOT NULL
);