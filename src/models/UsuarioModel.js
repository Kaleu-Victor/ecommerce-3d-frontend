const usuarioInicial = { // teste de troca USUARIO  ou ADMINISTRADOR
  id: 1,
  nome: 'João da Silva',
  email: 'joao@exemplo.com',
  tipo: 'ADMINISTRADOR' 
};

const CHAVE_USUARIO = '3dstore_perfil';

export const obterUsuario = () => {
  const dadosSalvos = localStorage.getItem(CHAVE_USUARIO);

  if (dadosSalvos) {
    try {
      const dados = JSON.parse(dadosSalvos);

      if (
        dados &&
        typeof dados.nome === 'string' &&
        typeof dados.email === 'string'
      ) {
        return {
          ...usuarioInicial,
          nome: dados.nome,
          email: dados.email
        };
      }
    } catch {
      
    }
  }

  return { ...usuarioInicial };
};

// salv somente campos que foram editados
export const salvarUsuario = ({ nome, email }) => {
  localStorage.setItem(
    CHAVE_USUARIO,
    JSON.stringify({ nome, email })
  );

  return obterUsuario();
};

//lembrete: as info estão guardadas apenas no navegador, se o usuario limpar o cache ou abrir em outro navegador, as info serão perdidas.