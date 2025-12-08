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
  publishedAt: Date;
}
