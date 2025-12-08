import { ETicketStatus } from "@/enums/ticket-status";
import type { Ticket } from "@/types/ticket";

export const TICKETS_DATA: Ticket[] = [
  {
    ticketId: "Ticket# 2025-CX101",
    status: ETicketStatus.NEW_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    username: "Carlos Mota",
    userInitials: "CM",
    title: "Não consigo fazer login na conta",
    description:
      "Ao digitar meu e-mail e senha, recebo a mensagem de erro: 'Credenciais inválidas', mesmo depois de redefinir minha senha ontem.",
    publishedAt: new Date(2025, 11, 5, 9, 15),
  },
  {
    ticketId: "Ticket# 2025-CX102",
    status: ETicketStatus.ON_GOING_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "Ana Beatriz",
    userInitials: "AB",
    title: "Erro ao gerar boleto de pagamento",
    description:
      "O sistema trava quando clico em 'Gerar boleto'. Já tentei em navegadores diferentes e recebo um aviso genérico de falha.",
    publishedAt: new Date(2025, 11, 4, 14, 30),
  },
  {
    ticketId: "Ticket# 2025-CX103",
    status: ETicketStatus.RESOLVED_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/men/58.jpg",
    username: "Pedro Costa",
    userInitials: "PC",
    title: "Solicitação de cancelamento de assinatura",
    description:
      "Por favor, cancelem minha assinatura e confirmem o estorno do valor cobrado hoje. Obrigado.",
    publishedAt: new Date(2025, 11, 3, 11, 0),
  },
  {
    ticketId: "Ticket# 2025-CX104",
    status: ETicketStatus.ON_GOING_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    username: "Juliana Silva",
    userInitials: "JS",
    title: "Dúvida sobre planos disponíveis",
    description:
      "Quais são as diferenças entre o plano Básico e o plano Premium? Gostaria de entender os benefícios antes de contratar.",
    publishedAt: new Date(2025, 10, 30, 16, 45),
  },
  {
    ticketId: "Ticket# 2025-CX105",
    status: ETicketStatus.NEW_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    username: "Ricardo Alves",
    userInitials: "RA",
    title: "Pagamento não aparece no histórico",
    description:
      "Efetuei o pagamento ontem, mas meu perfil ainda mostra pendente. Podem verificar se o pagamento foi recebido?",
    publishedAt: new Date(2025, 11, 5, 10, 5),
  },
  {
    ticketId: "Ticket# 2025-CX106",
    status: ETicketStatus.RESOLVED_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
    username: "Mariana Rocha",
    userInitials: "MR",
    title: "Problema ao redefinir senha",
    description:
      "Solicitei a recuperação de senha, recebi o e-mail, mas o link diz: 'Token inválido ou expirado'.",
    publishedAt: new Date(2025, 10, 28, 21, 20),
  },
  {
    ticketId: "Ticket# 2025-CX107",
    status: ETicketStatus.ON_GOING_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/men/66.jpg",
    username: "Fernando Gomes",
    userInitials: "FG",
    title: "Bug na visualização de relatórios",
    description:
      "Ao abrir a aba de relatórios mensais, a tela fica em branco e nenhuma informação é carregada.",
    publishedAt: new Date(2025, 11, 2, 13, 55),
  },
  {
    ticketId: "Ticket# 2025-CX108",
    status: ETicketStatus.NEW_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/women/51.jpg",
    username: "Patrícia Fernandes",
    userInitials: "PF",
    title: "Solicitação de upgrade de plano",
    description:
      "Gostaria de fazer upgrade para o plano Premium a partir do próximo ciclo. Podem me informar os passos?",
    publishedAt: new Date(2025, 11, 5, 8, 40),
  },
  {
    ticketId: "Ticket# 2025-CX109",
    status: ETicketStatus.RESOLVED_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/men/27.jpg",
    username: "Bruno Henrique",
    userInitials: "BH",
    title: "Erro 500 ao acessar dashboard",
    description:
      "Recebo um erro interno (500) quando tento acessar o painel de controle após o login. Já limpei cache e cookies.",
    publishedAt: new Date(2025, 10, 25, 19, 10),
  },
  {
    ticketId: "Ticket# 2025-CX110",
    status: ETicketStatus.ON_GOING_TICKET,
    userImageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
    username: "Sofia Castro",
    userInitials: "SC",
    title: "Alteração de e-mail cadastrado",
    description:
      "Quero atualizar meu e-mail para sofia.novo@example.com. Meu e-mail antigo era sofia.antigo@example.com.",
    publishedAt: new Date(2025, 11, 1, 15, 25),
  },
];
