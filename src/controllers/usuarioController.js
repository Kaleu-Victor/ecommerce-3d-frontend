import { //Ta salvando no navegador
    obterUsuario,
    salvarUsuario
} from '../models/UsuarioModel.js';

export const buscarUsuario = () => {
    return obterUsuario();
}

export const atualizarUsuario = ({ nome, email }) => {
    const nomeFormatado = nome.trim();
    const emailFormatado = email.trim().toLowerCase();

    if (!nomeFormatado || !emailFormatado) {
        return {
            sucesso: false,
            mensagem: 'Preencha o nome e o email.'
        };
    }

    if (nomeFormatado.length < 3) {
        return {
            sucesso: false,
            mensagem: 'O nome deve ter pelo menos 3 caracteres.'
        };
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(emailFormatado)) {
        return {
            sucesso: false,
            mensagem: 'Digite um email válido.'
        };
    }

    try {
        const usuario = salvarUsuario({
            nome: nomeFormatado,
            email: emailFormatado
        });

        return {
            sucesso: true,
            mensagem: 'Perfil atualizado com sucesso.',
            usuario
        };
    } catch {
        return {
            sucesso: false,
            mensagem: 'Não foi possível atualizar o perfil. Tente novamente.'
        };
    }

};

// teste de validação da troca de senha(salvando localmente)
export const alterarSenha = ({
  senhaAtual,
  novaSenha,
  confirmarSenha
}) => {
  if (!senhaAtual || !novaSenha || !confirmarSenha) {
    return {
      sucesso: false,
      mensagem: 'Preencha todos os campos de senha.'
    };
  }

  if (novaSenha.length < 8) {
    return {
      sucesso: false,
      mensagem: 'A nova senha deve ter pelo menos 8 caracteres.'
    };
  }

  if (novaSenha !== confirmarSenha) {
    return {
      sucesso: false,
      mensagem: 'A confirmação deve ser igual à nova senha.'
    };
  }

  if (novaSenha === senhaAtual) {
    return {
      sucesso: false,
      mensagem: 'A nova senha deve ser diferente da senha atual.'
    };
  }

  return {
    sucesso: true,
    mensagem: 'Validação concluída! A troca de senha é simulada nesta versão.'
  };
};