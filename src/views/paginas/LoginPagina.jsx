import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPagina.css';

const LoginPagina = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const realizarLogin = (e) => {
    e.preventDefault();

    setErro('');

    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    // Login apenas para demonstração do frontend.
    // A autenticação real será feita posteriormente pelo backend.

    console.log('Login:', {
      email,
      senha
    });

    navigate('/');
  };

  return (
    <div className="pagina-login">

      <div className="card-login">

        <div className="cabecalho-login">
          <h1>
            <span>3D</span>Store
          </h1>

          <h2>Entrar</h2>

          <p>
            Entre na sua conta para continuar
          </p>
        </div>

        {erro && (
          <div className="mensagem-erro">
            {erro}
          </div>
        )}

        <form onSubmit={realizarLogin}>

          <div className="campo-login">
            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="campo-login">
            <label htmlFor="senha">
              Senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="botao-login"
          >
            Entrar
          </button>

        </form>

        <div className="rodape-login">
          <p>
            Ainda não possui uma conta?
          </p>

          <Link to="/cadastro">
            Criar uma conta
          </Link>
        </div>

      </div>

    </div>
  );
};

export default LoginPagina;

