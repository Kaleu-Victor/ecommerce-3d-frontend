
import React, { useState } from 'react';
import './CadastroProdutoPagina.css';

const formularioInicial = {
  nome: '',
  categoria: 'Decoração',
  descricao: '',
  imagem: '',
  material: 'PLA',
  horasImpressao: '0',
  minutosImpressao: '0',
  minutosAcabamento: '0',
  peso: '',
  altura: '',
  largura: '',
  profundidade: '',
  preco: '',
  estoque: '0',
  personalizado: false,
  status: 'Disponível',
};

const CadastroProdutoPagina = () => {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const alterarCampo = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setMensagem('');
    setErro('');
  };

  const cadastrarProduto = (e) => {
    e.preventDefault();
    setMensagem('');
    setErro('');

    const preco = Number(formulario.preco);
    const horas = Number(formulario.horasImpressao);
    const minutos = Number(formulario.minutosImpressao);
    const acabamento = Number(formulario.minutosAcabamento);
    const estoque = Number(formulario.estoque);

    if (
      !formulario.nome.trim() ||
      !formulario.descricao.trim() ||
      !formulario.preco ||
      !formulario.peso ||
      !formulario.altura ||
      !formulario.largura ||
      !formulario.profundidade
    ) {
      setErro('Preencha todos os campos obrigatórios.');
      return;
    }

    if (
      preco <= 0 ||
      Number(formulario.peso) <= 0 ||
      Number(formulario.altura) <= 0 ||
      Number(formulario.largura) <= 0 ||
      Number(formulario.profundidade) <= 0 ||
      estoque < 0 ||
      horas < 0 ||
      minutos < 0 ||
      minutos >= 60 ||
      acabamento < 0 ||
      !Number.isInteger(estoque) ||
      (horas === 0 && minutos === 0)
    ) {
      setErro('Confira os valores informados. O tempo de impressão deve ser maior que zero.');
      return;
    }

    const novoProduto = {
      ...formulario,
      id: Date.now(),
      nome: formulario.nome.trim(),
      descricao: formulario.descricao.trim(),
      preco,
      estoque,
      peso: Number(formulario.peso),
      altura: Number(formulario.altura),
      largura: Number(formulario.largura),
      profundidade: Number(formulario.profundidade),
      horasImpressao: horas,
      minutosImpressao: minutos,
      minutosAcabamento: acabamento,
    };

    setProdutos((anteriores) => [novoProduto, ...anteriores]);
    setFormulario({ ...formularioInicial });
    setMensagem('Produto cadastrado com sucesso!');
  };

  const formatarPreco = (preco) =>
    preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const formatarTempo = (produto) => {
    const partes = [];

    if (produto.horasImpressao > 0) {
      partes.push(`${produto.horasImpressao}h`);
    }

    if (produto.minutosImpressao > 0) {
      partes.push(`${produto.minutosImpressao}min`);
    }

    return partes.join(' ');
  };

  return (
    <div className="pagina-produtos-admin">
      <header className="cabecalho-produtos-admin">
        <div>
          <span className="etiqueta-admin">ÁREA ADMINISTRATIVA</span>
          <h1>Cadastro de produtos</h1>
          <p>
            Gerencie os produtos e suas informações de fabricação.
          </p>
        </div>

        <div className="contador-produtos">
          <span>Produtos cadastrados nesta sessão</span>
          <strong>{produtos.length}</strong>
        </div>
      </header>

      <form onSubmit={cadastrarProduto} className="formulario-produto">
        {erro && (
          <div className="aviso-produto aviso-erro" role="alert">
            {erro}
          </div>
        )}

        {mensagem && (
          <div className="aviso-produto aviso-sucesso" role="status">
            {mensagem}
          </div>
        )}

        <section className="secao-produto">
          <div className="titulo-secao-produto">
            <span className="numero-secao">01</span>
            <div>
              <h2>Informações do produto</h2>
              <p>Dados que serão apresentados no catálogo.</p>
            </div>
          </div>

          <div className="grade-campos">
            <div className="campo-produto campo-largo">
              <label htmlFor="nome">Nome do produto *</label>
              <input
                id="nome"
                name="nome"
                value={formulario.nome}
                onChange={alterarCampo}
                placeholder="Ex.: Luminária Sharingan"
                required
              />
            </div>

            <div className="campo-produto">
              <label htmlFor="categoria">Categoria *</label>
              <select
                id="categoria"
                name="categoria"
                value={formulario.categoria}
                onChange={alterarCampo}
                required
              >
                <option>Decoração</option>
                <option>Personagens e colecionáveis</option>
                <option>Organização</option>
                <option>Acessórios</option>
                <option>Utilidades</option>
                <option>Brinquedos</option>
                <option>Personalizados</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="campo-produto campo-largo">
              <label htmlFor="descricao">Descrição *</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formulario.descricao}
                onChange={alterarCampo}
                placeholder="Descreva o produto, suas características e sua utilização."
                rows={4}
                required
              />
            </div>

            <div className="campo-produto campo-largo">
              <label htmlFor="imagem">URL da imagem</label>
              <input
                id="imagem"
                name="imagem"
                type="url"
                value={formulario.imagem}
                onChange={alterarCampo}
                placeholder="https://exemplo.com/imagem.jpg"
              />
              <small>Opcional. Informe um endereço de imagem acessível.</small>
            </div>
          </div>
        </section>

        <section className="secao-produto">
          <div className="titulo-secao-produto">
            <span className="numero-secao">02</span>
            <div>
              <h2>Detalhes de fabricação</h2>
              <p>Informações necessárias para organizar a produção.</p>
            </div>
          </div>

          <div className="grade-campos">
            <div className="campo-produto">
              <label htmlFor="material">Material *</label>
              <select
                id="material"
                name="material"
                value={formulario.material}
                onChange={alterarCampo}
                required
              >
                <option value="PLA">PLA</option>
                <option value="PETG">PETG</option>
              </select>
            </div>

            <div className="campo-produto">
              <label>Tempo de impressão *</label>
              <div className="campos-tempo">
                <div>
                  <input
                    aria-label="Horas de impressão"
                    type="number"
                    name="horasImpressao"
                    min="0"
                    step="1"
                    value={formulario.horasImpressao}
                    onChange={alterarCampo}
                    required
                  />
                  <small>Horas</small>
                </div>
                <div>
                  <input
                    aria-label="Minutos de impressão"
                    type="number"
                    name="minutosImpressao"
                    min="0"
                    max="59"
                    step="1"
                    value={formulario.minutosImpressao}
                    onChange={alterarCampo}
                    required
                  />
                  <small>Minutos</small>
                </div>
              </div>
            </div>

            <div className="campo-produto">
              <label htmlFor="minutosAcabamento">
                Tempo de acabamento (min)
              </label>
              <input
                id="minutosAcabamento"
                name="minutosAcabamento"
                type="number"
                min="0"
                step="1"
                value={formulario.minutosAcabamento}
                onChange={alterarCampo}
              />
            </div>

            <div className="campo-produto">
              <label htmlFor="peso">Peso estimado (g) *</label>
              <input
                id="peso"
                name="peso"
                type="number"
                min="0.1"
                step="any"
                value={formulario.peso}
                onChange={alterarCampo}
                placeholder="Ex.: 150"
                required
              />
            </div>
          </div>
        </section>

        <section className="secao-produto">
          <div className="titulo-secao-produto">
            <span className="numero-secao">03</span>
            <div>
              <h2>Dimensões e comercialização</h2>
              <p>Defina o tamanho, o preço e a disponibilidade.</p>
            </div>
          </div>

          <div className="grade-campos">
            <div className="campo-produto">
              <label htmlFor="altura">Altura (cm) *</label>
              <input
                id="altura"
                name="altura"
                type="number"
                min="0.1"
                step="any"
                value={formulario.altura}
                onChange={alterarCampo}
                required
              />
            </div>

            <div className="campo-produto">
              <label htmlFor="largura">Largura (cm) *</label>
              <input
                id="largura"
                name="largura"
                type="number"
                min="0.1"
                step="any"
                value={formulario.largura}
                onChange={alterarCampo}
                required
              />
            </div>

            <div className="campo-produto">
              <label htmlFor="profundidade">Profundidade (cm) *</label>
              <input
                id="profundidade"
                name="profundidade"
                type="number"
                min="0.1"
                step="any"
                value={formulario.profundidade}
                onChange={alterarCampo}
                required
              />
            </div>

            <div className="campo-produto">
              <label htmlFor="preco">Preço de venda (R$) *</label>
              <input
                id="preco"
                name="preco"
                type="number"
                min="0.01"
                step="0.01"
                value={formulario.preco}
                onChange={alterarCampo}
                placeholder="Ex.: 49,90"
                required
              />
            </div>

            <div className="campo-produto">
              <label htmlFor="estoque">Quantidade em estoque *</label>
              <input
                id="estoque"
                name="estoque"
                type="number"
                min="0"
                step="1"
                value={formulario.estoque}
                onChange={alterarCampo}
                required
              />
            </div>

            <div className="campo-produto">
              <label htmlFor="status">Status do produto</label>
              <select
                id="status"
                name="status"
                value={formulario.status}
                onChange={alterarCampo}
              >
                <option>Disponível</option>
                <option>Indisponível</option>
              </select>
            </div>

            <div className="campo-produto campo-largo">
              <label className="opcao-personalizado">
                <input
                  type="checkbox"
                  name="personalizado"
                  checked={formulario.personalizado}
                  onChange={alterarCampo}
                />
                <span>
                  <strong>Produto personalizado</strong>
                  <small>
                    Permite que o cliente solicite personalizações.
                  </small>
                </span>
              </label>
            </div>
          </div>
        </section>

        <div className="acoes-produto">
          <button
            type="button"
            className="botao-limpar"
            onClick={() => {
              setFormulario({ ...formularioInicial });
              setErro('');
              setMensagem('');
            }}
          >
            Limpar campos
          </button>

          <button type="submit" className="botao-salvar-produto">
            Cadastrar produto
          </button>
        </div>
      </form>

      <section className="lista-produtos-admin">
        <div className="titulo-lista-produtos">
          <div>
            <h2>Produtos cadastrados</h2>
            <p>Produtos adicionados durante esta sessão.</p>
          </div>
          <span>{produtos.length} produto(s)</span>
        </div>

        {produtos.length === 0 ? (
          <div className="lista-vazia-produtos">
            <span className="icone-lista-vazia">＋</span>
            <h3>Nenhum produto cadastrado</h3>
            <p>
              Preencha o formulário acima para adicionar o primeiro produto.
            </p>
          </div>
        ) : (
          <div className="grade-produtos-cadastrados">
            {produtos.map((produto) => (
              <article className="card-produto-admin" key={produto.id}>
                {produto.imagem ? (
                  <img
                    className="imagem-produto-admin"
                    src={produto.imagem}
                    alt={produto.nome}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="imagem-produto-placeholder">
                    <span>3D</span>
                  </div>
                )}

                <div className="conteudo-card-produto">
                  <div className="linha-status-produto">
                    <span className="categoria-produto">
                      {produto.categoria}
                    </span>
                    <span
                      className={
                        produto.status === 'Disponível'
                          ? 'status-produto status-disponivel'
                          : 'status-produto status-indisponivel'
                      }
                    >
                      {produto.status}
                    </span>
                  </div>

                  <h3>{produto.nome}</h3>
                  <p className="descricao-card-produto">
                    {produto.descricao}
                  </p>

                  <div className="detalhes-card-produto">
                    <span>Material: <strong>{produto.material}</strong></span>
                    <span>Impressão: <strong>{formatarTempo(produto)}</strong></span>
                    <span>Peso: <strong>{produto.peso} g</strong></span>
                    <span>Acabamento: <strong>{produto.minutosAcabamento} min</strong></span>
                    <span>Estoque: <strong>{produto.estoque}</strong></span>
                    <span>
                      Personalizado: <strong>{produto.personalizado ? 'Sim' : 'Não'}</strong>
                    </span>
                  </div>

                  <div className="rodape-card-produto">
                    <strong>{formatarPreco(produto.preco)}</strong>
                    <small>
                      {produto.altura} × {produto.largura} × {produto.profundidade} cm
                    </small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CadastroProdutoPagina;
