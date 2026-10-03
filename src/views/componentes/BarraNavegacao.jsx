import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obterQuantidadeTotal } from '../../controllers/carrinhoController';
import './BarraNavegacao.css';

const BarraNavegacao = () => {
  const [qtdCarrinho, setQtdCarrinho] = useState(obterQuantidadeTotal());

  useEffect(() => {
    // Escuta o evento global para atualizar o ícone do carrinho
    const atualizar = () => setQtdCarrinho(obterQuantidadeTotal());
    window.addEventListener('carrinhoAtualizado', atualizar);
    
    return () => {
      window.removeEventListener('carrinhoAtualizado', atualizar);
    };
  }, []);

  return (
    <nav className="barra-navegacao">
      <div className="logo-container">
        <Link to="/" className="logo-texto">
          <span className="destaque">3D</span>Store
        </Link>
      </div>
      <ul className="links-navegacao">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/carrinho" className="link-carrinho">Carrinho <span className="badge">{qtdCarrinho}</span></Link></li>
        <li><Link to="/pedido/1">Meus Pedidos</Link></li>
        <li><a href="#entrar" className="btn-entrar">Entrar</a></li>
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
