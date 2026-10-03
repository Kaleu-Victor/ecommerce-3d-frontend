import React from 'react';
import { Link } from 'react-router-dom';
import './BarraNavegacao.css';

const BarraNavegacao = () => {
  return (
    <nav className="barra-navegacao">
      <div className="logo-container">
        <Link to="/" className="logo-texto">
          <span className="destaque">3D</span>Store
        </Link>
      </div>
      <ul className="links-navegacao">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/pedido/1">Meus Pedidos</Link></li>
        <li><a href="#entrar" className="btn-entrar">Entrar</a></li>
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
