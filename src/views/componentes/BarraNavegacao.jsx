import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { obterQuantidadeTotal } from '../../controllers/carrinhoController';
import './BarraNavegacao.css';

const BarraNavegacao = () => {
  const [qtdCarrinho, setQtdCarrinho] = useState(obterQuantidadeTotal());
  const [termoBusca, setTermoBusca] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Escuta o evento global para atualizar o ícone do carrinho
    const atualizar = () => setQtdCarrinho(obterQuantidadeTotal());
    window.addEventListener('carrinhoAtualizado', atualizar);
    
    return () => {
      window.removeEventListener('carrinhoAtualizado', atualizar);
    };
  }, []);

  const realizarBusca = (e) => {
    e.preventDefault();
    if (termoBusca.trim() !== '') {
      navigate(`/?busca=${encodeURIComponent(termoBusca)}`);
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="barra-navegacao">
      <div className="logo-container">
        <Link to="/" className="logo-texto">
          <span className="destaque">3D</span>Store
        </Link>
      </div>

      <form className="busca-container" onSubmit={realizarBusca}>
        <input 
          type="text" 
          className="input-busca" 
          placeholder="Buscar peças, miniaturas, suportes..." 
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <button type="submit" className="btn-busca">🔍</button>
      </form>

      <ul className="links-navegacao">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/">Catálogo</Link></li>
        <li><Link to="/carrinho" className="link-carrinho">Carrinho <span className="badge">{qtdCarrinho}</span></Link></li>
        <li><Link to="/pedido/1">Meus Pedidos</Link></li>
        <li><Link to="/login" className="btn-entrar">Entrar</Link></li>
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
