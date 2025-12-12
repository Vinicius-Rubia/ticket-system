import type { TicketStatusValue } from "@/enums/ticket-status";
import type { TicketTypeValue } from "@/enums/ticket-type";

export interface Ticket {
  ticketId: string;
  status: TicketStatusValue;
  ticketType: TicketTypeValue;
  userImageUrl: string;
  username: string;
  userInitials: string;
  title: string;
  description: string;
  replies?: ReplyTicket[];
  createdAt: Date;
}

export interface ReplyTicket {
  id: string;
  username: string;
  userImageUrl: string;
  replyMessage: string;
  userInitials: string;
  isCompanyResponse: boolean;
  createdAt: Date;
}
