import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CartaoProduto from '../componentes/CartaoProduto';
import { buscarProdutos } from '../../controllers/produtoController';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const [produtos, setProdutos] = useState([]);
  const [searchParams] = useSearchParams();
  const termoBusca = searchParams.get('busca');

  useEffect(() => {
    // Simulando uma busca ao backend, conectando Controlador e Modelo
    let dados = buscarProdutos();
    
    // Filtra os produtos caso haja um termo de busca
    if (termoBusca) {
      const termoFormatado = termoBusca.toLowerCase();
      dados = dados.filter(produto => 
        produto.nome.toLowerCase().includes(termoFormatado) || 
        produto.descricao.toLowerCase().includes(termoFormatado)
      );
    }
    
    setProdutos(dados);
  }, [termoBusca]);

  return (
    <div className="pagina-inicial">
      <header className="cabecalho-destaque">
        <h1>Catálogo de Impressão 3D</h1>
        <p>Encontre produtos exclusivos feitos com alta tecnologia de manufatura aditiva.</p>
      </header>

      <div className="grid-produtos">
        {produtos.length > 0 ? (
          produtos.map(produto => (
            <CartaoProduto key={produto.id} produto={produto} />
          ))
        ) : (
          <p className="nenhum-produto">Nenhum produto encontrado para "{termoBusca}".</p>
        )}
      </div>
    </div>
  );
};

export default PaginaInicial;
