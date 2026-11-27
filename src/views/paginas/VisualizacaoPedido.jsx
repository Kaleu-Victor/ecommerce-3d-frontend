import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { buscarPedidoPorId } from '../../controllers/pedidoController';
import './VisualizacaoPedido.css';

const VisualizacaoPedido = () => {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    // Busca o pedido baseado no parâmetro da URL usando o Controlador
    const dadosPedido = buscarPedidoPorId(id);
    setPedido(dadosPedido);
  }, [id]);

  if (!pedido) {
    return <div className="carregando">Carregando pedido ou pedido não encontrado...</div>;
  }

  return (
    <div className="pagina-pedido">
      <Link to="/" className="btn-voltar">← Voltar para o Catálogo</Link>
      
      <div className="detalhes-pedido">
        <h2>Acompanhamento do Pedido #{pedido.id}</h2>
        <p><strong>Cliente:</strong> {pedido.cliente}</p>
        <p><strong>Item:</strong> {pedido.item}</p>
        <p><strong>Valor Total:</strong> R$ {pedido.valor.toFixed(2)}</p>
      </div>

      <div className="linha-tempo-producao">
        <h3>Linha de Produção 3D</h3>
        <div className="etapas-container">
          {pedido.historico.map((etapa, index) => (
            <div key={index} className={`etapa ${etapa.concluido ? 'concluida' : 'pendente'}`}>
              <div className="marcador">{index + 1}</div>
              <div className="conteudo-etapa">
                <h4>{etapa.etapa}</h4>
                {etapa.data && <small>{etapa.data}</small>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualizacaoPedido;
