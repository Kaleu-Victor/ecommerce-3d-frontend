import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroPagina.css';

const CadastroPagina = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const realizarCadastro = (e) => {
    e.preventDefault();

    setErro('');

    if (
      !nome ||
      !email ||
      !senha ||
      !confirmarSenha ||
      !endereco ||
      !telefone
    ) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve possuir pelo menos 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não são iguais.');
      return;
    }

    // Cadastro apenas para demonstração do frontend.

    console.log('Novo usuário:', {
      nome,
      email,
      senha,
      endereco,
      telefone
    });

    navigate('/login');
  };

  return (
    <div className="pagina-cadastro">

      <div className="card-cadastro">

        <div className="cabecalho-cadastro">

          <h1>
            <span>3D</span>Store
          </h1>

          <h2>Criar conta</h2>

          <p>
            Cadastre-se para realizar seus pedidos
          </p>

        </div>

        {erro && (
          <div className="mensagem-erro-cadastro">
            {erro}
          </div>
        )}

        <form onSubmit={realizarCadastro}>

          <div className="campo-cadastro">
            <label htmlFor="nome">
              Nome completo
            </label>

            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="campo-cadastro">
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

          <div className="campo-cadastro">
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

          <div className="campo-cadastro">
            <label htmlFor="confirmarSenha">
              Confirmar senha
            </label>

            <input
              id="confirmarSenha"
              type="password"
              placeholder="Digite a senha novamente"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <div className="campo-cadastro">
            <label htmlFor="endereco">
              Endereço
            </label>

            <input
              id="endereco"
              type="text"
              placeholder="Digite seu endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className="campo-cadastro">
            <label htmlFor="telefone">
              Telefone
            </label>

            <input
              id="telefone"
              type="tel"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="acoes-cadastro">

            <Link
              to="/login"
              className="botao-voltar"
            >
              Voltar
            </Link>

            <button
              type="submit"
              className="botao-cadastro"
            >
              Confirmar
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CadastroPagina;