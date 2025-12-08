import type { TicketStatusValue } from "@/enums/ticket-status";

export interface Ticket {
  ticketId: string;
  status: TicketStatusValue;
  userImageUrl: string;
  username: string;
  userInitials: string;
  title: string;
  description: string;
  publishedAt: Date;
}
