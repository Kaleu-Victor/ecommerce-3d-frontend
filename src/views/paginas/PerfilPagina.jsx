import React, { useState } from 'react';
import {
  buscarUsuario,
  atualizarUsuario,
  alterarSenha
} from '../../controllers/usuarioController';
import './PerfilPagina.css';

const camposSenha = [
  {
    nome: 'senhaAtual',
    id: 'perfil-senha-atual',
    titulo: 'Senha atual',
    autoComplete: 'current-password'
  },
  {
    nome: 'novaSenha',
    id: 'perfil-nova-senha',
    titulo: 'Nova senha',
    autoComplete: 'new-password'
  },
  {
    nome: 'confirmarSenha',
    id: 'perfil-confirmar-senha',
    titulo: 'Confirmar nova senha',
    autoComplete: 'new-password'
  }
];

const PerfilPagina = () => {
  const [usuario, setUsuario] = useState(() => buscarUsuario());

  const [dados, setDados] = useState({
    nome: usuario.nome,
    email: usuario.email
  });

  const [senhas, setSenhas] = useState({
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: ''
  });

  const [mostrarSenhas, setMostrarSenhas] = useState({
    senhaAtual: false,
    novaSenha: false,
    confirmarSenha: false
  });

  const [mensagemPerfil, setMensagemPerfil] = useState(null);
  const [mensagemSenha, setMensagemSenha] = useState(null);

  const administrador = usuario.tipo === 'ADMINISTRADOR';

  const alternarVisibilidadeSenha = (campo) => {
    setMostrarSenhas((anteriores) => ({
      ...anteriores,
      [campo]: !anteriores[campo]
    }));
  };

  const atualizarCampo = (e) => {
    const { name, value } = e.target;

    setDados((anteriores) => ({
      ...anteriores,
      [name]: value
    }));

    setMensagemPerfil(null);
  };

  const atualizarCampoSenha = (e) => {
    const { name, value } = e.target;

    setSenhas((anteriores) => ({
      ...anteriores,
      [name]: value
    }));

    setMensagemSenha(null);
  };

  const salvarPerfil = (e) => {
    e.preventDefault();

    const resultado = atualizarUsuario(dados);
    setMensagemPerfil(resultado);

    if (resultado.sucesso) {
      setUsuario(resultado.usuario);
      setDados({
        nome: resultado.usuario.nome,
        email: resultado.usuario.email
      });
    }
  };

  const cancelarEdicao = () => {
    setDados({
      nome: usuario.nome,
      email: usuario.email
    });

    setMensagemPerfil(null);
  };

  const salvarSenha = (e) => {
    e.preventDefault();

    const resultado = alterarSenha(senhas);
    setMensagemSenha(resultado);

    if (resultado.sucesso) {
      setSenhas({
        senhaAtual: '',
        novaSenha: '',
        confirmarSenha: ''
      });

      setMostrarSenhas({
        senhaAtual: false,
        novaSenha: false,
        confirmarSenha: false
      });
    }
  };

  return (
    <div className="pagina-perfil">
      <header className="perfil-cabecalho">
        <h1>Meu perfil</h1>
        <p>Confira seus dados e gerencie as informações da sua conta.</p>
      </header>

      <section className="perfil-resumo" aria-label="Resumo da conta">
        <div className="perfil-avatar" aria-hidden="true">
          {usuario.nome.trim().charAt(0).toUpperCase()}
        </div>

        <div className="perfil-identificacao">
          <h2>{usuario.nome}</h2>
          <p>{usuario.email}</p>
          <span className="perfil-tipo">
            {administrador ? 'Administrador' : 'Usuário'}
          </span>
        </div>
      </section>

      <div className="perfil-grid">
        <section
          className="perfil-cartao"
          aria-labelledby="titulo-dados"
        >
          <h2 id="titulo-dados">Dados da conta</h2>
          <p className="perfil-descricao">
            Atualize seu nome e seu e-mail.
          </p>

          <form
            className="perfil-formulario"
            onSubmit={salvarPerfil}
            noValidate
          >
            <div className="perfil-campo">
              <label htmlFor="perfil-nome">Nome</label>
              <input
                id="perfil-nome"
                name="nome"
                type="text"
                autoComplete="name"
                value={dados.nome}
                onChange={atualizarCampo}
                required
              />
            </div>

            <div className="perfil-campo">
              <label htmlFor="perfil-email">E-mail</label>
              <input
                id="perfil-email"
                name="email"
                type="email"
                autoComplete="email"
                value={dados.email}
                onChange={atualizarCampo}
                required
              />
            </div>

            {mensagemPerfil && (
              <p
                className={`perfil-mensagem ${
                  mensagemPerfil.sucesso
                    ? 'perfil-mensagem-sucesso'
                    : 'perfil-mensagem-erro'
                }`}
                role={mensagemPerfil.sucesso ? 'status' : 'alert'}
              >
                {mensagemPerfil.mensagem}
              </p>
            )}

            <div className="perfil-acoes">
              <button type="submit" className="perfil-botao-primario">
                Salvar alterações
              </button>

              <button
                type="button"
                className="perfil-botao-secundario"
                onClick={cancelarEdicao}
              >
                Cancelar
              </button>
            </div>
          </form>
        </section>

        <section
          className="perfil-cartao"
          aria-labelledby="titulo-senha"
        >
          <h2 id="titulo-senha">Alterar senha</h2>
          <form
            className="perfil-formulario"
            onSubmit={salvarSenha}
            noValidate
          >
            {camposSenha.map((campo) => (
              <div className="perfil-campo" key={campo.nome}>
                <label htmlFor={campo.id}>{campo.titulo}</label>

                <div className="perfil-senha-container">
                  <input
                    id={campo.id}
                    name={campo.nome}
                    type={
                      mostrarSenhas[campo.nome] ? 'text' : 'password'
                    }
                    autoComplete={campo.autoComplete}
                    value={senhas[campo.nome]}
                    onChange={atualizarCampoSenha}
                    minLength={campo.nome === 'novaSenha' ? 8 : undefined}
                    aria-describedby={
                      campo.nome === 'novaSenha'
                        ? 'perfil-dica-senha'
                        : undefined
                    }
                    required
                  />

                  <button
                    type="button"
                    className="perfil-botao-senha"
                    aria-controls={campo.id}
                    aria-label={`${
                      mostrarSenhas[campo.nome] ? 'Ocultar' : 'Mostrar'
                    } ${campo.titulo.toLowerCase()}`}
                    onClick={() => alternarVisibilidadeSenha(campo.nome)}
                  >
                    {mostrarSenhas[campo.nome] ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>

                {campo.nome === 'novaSenha' && (
                  <small id="perfil-dica-senha">
                    Use pelo menos 8 caracteres.
                  </small>
                )}
              </div>
            ))}

            {mensagemSenha && (
              <p
                className={`perfil-mensagem ${
                  mensagemSenha.sucesso
                    ? 'perfil-mensagem-sucesso'
                    : 'perfil-mensagem-erro'
                }`}
                role={mensagemSenha.sucesso ? 'status' : 'alert'}
              >
                {mensagemSenha.mensagem}
              </p>
            )}

            <div className="perfil-acoes">
              <button type="submit" className="perfil-botao-primario">
                alterar senha
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PerfilPagina;