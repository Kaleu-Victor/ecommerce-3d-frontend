import React, { useState, useEffect } from 'react';
import CartaoProduto from '../componentes/CartaoProduto';
import { buscarProdutos } from '../../controllers/produtoController';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Simulando uma busca ao backend, conectando Controlador e Modelo
    const dados = buscarProdutos();
    setProdutos(dados);
  }, []);

  return (
    <div className="pagina-inicial">
      <header className="cabecalho-destaque">
        <h1>Catálogo de Impressão 3D</h1>
        <p>Encontre produtos exclusivos feitos com alta tecnologia de manufatura aditiva.</p>
      </header>

      <div className="grid-produtos">
        {produtos.map(produto => (
          <CartaoProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default PaginaInicial;
