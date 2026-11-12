import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BarraNavegacao from './views/componentes/BarraNavegacao';

import PaginaInicial from './views/paginas/PaginaInicial';
import VisualizacaoPedido from './views/paginas/VisualizacaoPedido';
import CarrinhoPagina from './views/paginas/CarrinhoPagina';
import LoginPagina from './views/paginas/LoginPagina';
import CadastroPagina from './views/paginas/CadastroPagina';
import CadastroProdutoPagina from './views/paginas/CadastroProdutoPagina';
import './App.css';

function App() {
  return (
    <Router>

      <div className="aplicacao">

        <BarraNavegacao />

        <main className="conteudo-principal">

          <Routes>

            <Route
              path="/"
              element={<PaginaInicial />}
            />

            <Route
              path="/carrinho"
              element={<CarrinhoPagina />}
            />

            <Route
              path="/pedido/:id"
              element={<VisualizacaoPedido />}
            />

            <Route
              path="/login"
              element={<LoginPagina />}
            />

            <Route
              path="/cadastro"
              element={<CadastroPagina />}
            />
            <Route
              path="/admin/produtos/novo"
              element={<CadastroProdutoPagina />}
            />

          </Routes>

        </main>

      </div>

    </Router>
  );
}

export default App;

