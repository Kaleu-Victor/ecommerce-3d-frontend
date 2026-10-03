import { pedidosMock } from '../models/PedidoModel';

// Controlador simples que simula a busca de um pedido por ID
export const buscarPedidoPorId = (id) => {
  return pedidosMock.find(pedido => pedido.id === Number(id));
};

export const buscarTodosPedidos = () => {
  return pedidosMock;
};
