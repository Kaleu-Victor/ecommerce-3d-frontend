import {
  obterCarrinho,
  adicionarAoCarrinho,
  removerDoCarrinho,
  atualizarQuantidade,
  esvaziarCarrinho
} from '../models/carrinhoModel';

// Retorna todos os itens que estão no carrinho atualmente
export const buscarItensCarrinho = () => {
  return obterCarrinho();
};

// Adiciona um produto e atualiza a quantidade se já existir
export const adicionarItem = (produto) => {
  adicionarAoCarrinho(produto);
};

// Remove um item do carrinho pelo seu ID
export const removerItem = (id) => {
  removerDoCarrinho(id);
};

// Altera a quantidade de um item específico (aumentar/diminuir)
export const alterarQuantidade = (id, quantidade) => {
  atualizarQuantidade(id, quantidade);
};

// Limpa todos os itens do carrinho (usado ao finalizar o pedido)
export const limparCarrinho = () => {
  esvaziarCarrinho();
};

// Calcula a soma de (preço * quantidade) de todos os itens
export const obterSubtotal = () => {
  const itens = obterCarrinho();
  return itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);
};

// Retorna a quantidade total de peças (para o contador da Barra de Navegação)
export const obterQuantidadeTotal = () => {
  const itens = obterCarrinho();
  return itens.reduce((total, item) => total + item.quantidade, 0);
};
