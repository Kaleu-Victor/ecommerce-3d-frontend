export const pedidosMock = [
  {
    id: 1,
    cliente: "João da Silva",
    item: "Suporte para Notebook Ergonômico",
    statusId: 3, // 1: Confirmado, 2: Na Fila, 3: Em Produção 3D, 4: Finalizado
    valor: 45.90,
    historico: [
      { etapa: "Confirmado", data: "01/10/2026 10:00", concluido: true },
      { etapa: "Na Fila", data: "01/10/2026 11:30", concluido: true },
      { etapa: "Em Produção 3D", data: "02/10/2026 08:00", concluido: true },
      { etapa: "Finalizado", data: "", concluido: false }
    ]
  },
  {
    id: 2,
    cliente: "Maria Souza",
    item: "Vaso Decorativo Geométrico",
    statusId: 4,
    valor: 29.90,
    historico: [
      { etapa: "Confirmado", data: "28/09/2026 14:00", concluido: true },
      { etapa: "Na Fila", data: "28/09/2026 15:00", concluido: true },
      { etapa: "Em Produção 3D", data: "29/09/2026 09:00", concluido: true },
      { etapa: "Finalizado", data: "29/09/2026 11:30", concluido: true }
    ]
  },
  {
    id: 3,
    cliente: "Carlos Andrade",
    item: "Action Figure - Guerreiro",
    statusId: 2,
    valor: 120.00,
    historico: [
      { etapa: "Confirmado", data: "03/10/2026 12:00", concluido: true },
      { etapa: "Na Fila", data: "03/10/2026 13:00", concluido: true },
      { etapa: "Em Produção 3D", data: "", concluido: false },
      { etapa: "Finalizado", data: "", concluido: false }
    ]
  }
];
