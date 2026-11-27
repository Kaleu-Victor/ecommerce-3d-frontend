import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  buscarItensCarrinho, 
  removerItem, 
  alterarQuantidade, 
  obterSubtotal, 
  limparCarrinho 
} from '../../controllers/carrinhoController';
import './CarrinhoPagina.css';

const CarrinhoPagina = () => {
  const [itens, setItens] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const freteFixo = 15.00;

  // Atualiza a tela sempre que interagir com o Controller
  const atualizarTela = () => {
    setItens(buscarItensCarrinho());
    setSubtotal(obterSubtotal());
  };

  useEffect(() => {
    atualizarTela();
  }, []);

  const aoRemover = (id) => {
    removerItem(id);
    atualizarTela();
  };

  const mudarQuantidade = (id, novaQtd) => {
    if (novaQtd >= 1) {
      alterarQuantidade(id, novaQtd);
      atualizarTela();
    }
  };

  const finalizarPedido = () => {
    limparCarrinho();
    // Simulando que criou o pedido 1 no banco de dados
    navigate('/pedido/1');
  };

  if (itens.length === 0) {
    return (
      <div className="carrinho-vazio">
        <h2>Seu carrinho está vazio 🛒</h2>
        <p>Volte ao catálogo para adicionar peças 3D incríveis.</p>
        <Link to="/" className="btn-voltar-home">Voltar ao Catálogo</Link>
      </div>
    );
  }

  const valorTotal = subtotal + freteFixo;

  return (
    <div className="pagina-carrinho">
      <h2>Meu Carrinho</h2>
      <div className="carrinho-container">
        
        <div className="lista-itens">
          {itens.map((item) => (
            <div key={item.id} className="item-carrinho">
              <img src={item.imagem} alt={item.nome} className="item-img" />
              <div className="item-info">
                <h4>{item.nome}</h4>
                <span className="badge-material">{item.material}</span>
              </div>
              <div className="item-acoes">
                <div className="controle-qtd">
                  <button onClick={() => mudarQuantidade(item.id, item.quantidade - 1)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => mudarQuantidade(item.id, item.quantidade + 1)}>+</button>
                </div>
                <div className="item-preco">
                  R$ {(item.preco * item.quantidade).toFixed(2)}
                </div>
                <button onClick={() => aoRemover(item.id)} className="btn-remover">
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="resumo-carrinho">
          <h3>Resumo Financeiro</h3>
          <div className="linha-resumo">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="linha-resumo">
            <span>Frete Fixo</span>
            <span>R$ {freteFixo.toFixed(2)}</span>
          </div>
          <hr />
          <div className="linha-resumo total">
            <span>Total</span>
            <span>R$ {valorTotal.toFixed(2)}</span>
          </div>
          
          <button onClick={finalizarPedido} className="btn-finalizar">
            Finalizar Pedido
          </button>
          <Link to="/" className="btn-continuar">Continuar Comprando</Link>
        </div>
        
      </div>
    </div>
  );
};

export default CarrinhoPagina;
