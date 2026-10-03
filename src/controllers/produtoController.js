import { produtosMock } from '../models/ProdutoModel';

// Controlador simples que simula a busca de produtos (poderia ter um fetch para API aqui no futuro)
export const buscarProdutos = () => {
  return produtosMock;
};

// Exemplo de busca por ID caso fosse necessário
export const buscarProdutoPorId = (id) => {
  return produtosMock.find(produto => produto.id === parseInt(id));
};
