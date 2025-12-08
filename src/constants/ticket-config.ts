import { ETicketType, type TicketTypeValue } from "@/enums/ticket-type";

export const TICKET_TYPE_SELECT: Record<TicketTypeValue, string> = {
  [ETicketType.BUG]: "Bug",
  [ETicketType.ACCESS]: "Acesso",
  [ETicketType.FEATURE_REQUEST]: "Funcionalidade",
  [ETicketType.SUPORT_TECHNICAL]: "Suporte Técnico",
};
