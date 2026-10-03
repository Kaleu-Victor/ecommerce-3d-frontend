import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartaoProduto.css';

const CartaoProduto = ({ produto }) => {
  const navigate = useNavigate();

  const verPedido = () => {
    navigate(`/pedido/${produto.id}`);
  };

  return (
    <div className="cartao-produto">
      <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
      <div className="produto-conteudo">
        <h3 className="produto-titulo">{produto.nome}</h3>
        <p className="produto-descricao">{produto.descricao}</p>
        
        <div className="produto-detalhes">
          <span className="detalhe-badge">Material: {produto.material}</span>
          <span className="detalhe-badge">Tempo: {produto.tempoImpressao}</span>
        </div>

        <div className="produto-rodape">
          <span className="produto-preco">R$ {produto.preco.toFixed(2)}</span>
          <button onClick={verPedido} className="btn-comprar">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartaoProduto;
