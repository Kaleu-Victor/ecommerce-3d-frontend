// Modelo do carrinho responsável por armazenar e persistir os itens no localStorage
let itens = JSON.parse(localStorage.getItem('carrinho_3d')) || [];

const notificarMudanca = () => {
  localStorage.setItem('carrinho_3d', JSON.stringify(itens));
  // Dispara um evento global para que a Barra de Navegação atualize
  window.dispatchEvent(new Event('carrinhoAtualizado'));
};

export const obterCarrinho = () => {
  return itens;
};

export const adicionarAoCarrinho = (produto) => {
  const itemExistente = itens.find(i => i.id === produto.id);
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    itens.push({ ...produto, quantidade: 1 });
  }
  notificarMudanca();
};

export const removerDoCarrinho = (id) => {
  itens = itens.filter(i => i.id !== id);
  notificarMudanca();
};

export const atualizarQuantidade = (id, quantidade) => {
  const item = itens.find(i => i.id === id);
  if (item && quantidade > 0) {
    item.quantidade = quantidade;
    notificarMudanca();
  }
};

export const esvaziarCarrinho = () => {
  itens = [];
  notificarMudanca();
};
