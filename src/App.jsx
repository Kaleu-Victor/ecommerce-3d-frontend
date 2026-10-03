import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacao from './views/componentes/BarraNavegacao';
import PaginaInicial from './views/paginas/PaginaInicial';
import VisualizacaoPedido from './views/paginas/VisualizacaoPedido';
import CarrinhoPagina from './views/paginas/CarrinhoPagina';
import './App.css';

function App() {
  return (
    <Router>
      <div className="aplicacao">
        <BarraNavegacao />
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/carrinho" element={<CarrinhoPagina />} />
            <Route path="/pedido/:id" element={<VisualizacaoPedido />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
